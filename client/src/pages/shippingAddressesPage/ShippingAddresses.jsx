import { useState, useEffect } from "react";
import { fetchWithLoading } from "../../lib/fetchWithLoading";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://my-e-commerce-website-production.up.railway.app/api";

export default function ShippingAddresses() {
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    label: "Home",
    fullName: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
    isDefault: false,
  });

  const token = localStorage.getItem("authToken");

  const fetchAddresses = async () => {
    setIsLoading(true);
    try {
      const res = await fetchWithLoading(`${API_BASE_URL}/addresses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setAddresses(data.addresses);
      else setError(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchAddresses();
    }, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openForm = (address = null) => {
    if (address) {
      setEditingId(address.id);
      setFormData({ ...address });
    } else {
      setEditingId(null);
      setFormData({
        label: "Home",
        fullName: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        phone: "",
        isDefault: addresses.length === 0,
      });
    }
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `${API_BASE_URL}/addresses/${editingId}`
      : `${API_BASE_URL}/addresses`;

    try {
      const res = await fetchWithLoading(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowForm(false);
        fetchAddresses();
      } else {
        const data = await res.json();
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSetDefault = async (id) => {
    try {
      const res = await fetchWithLoading(`${API_BASE_URL}/addresses/${id}/set-default`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) fetchAddresses();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetchWithLoading(`${API_BASE_URL}/addresses/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) fetchAddresses();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="flex-grow w-full max-w-2xl mx-auto px-margin-mobile md:px-0 pt-stack-md flex flex-col gap-stack-md animate-page-enter">
      <div className="flex flex-col gap-base">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
          Shipping Addresses
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Manage your saved addresses for a quicker checkout experience.
        </p>
      </div>

      {error && <p className="text-error text-sm">{error}</p>}

      {isLoading ? (
        <p className="text-on-surface-variant animate-pulse">
          Loading addresses...
        </p>
      ) : (
        <div className="flex flex-col gap-stack-sm">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4 group ${
                addr.isDefault
                  ? "bg-surface-container-lowest ambient-shadow hover:shadow-[0_20px_50px_-12px_rgba(111,52,41,0.12)]"
                  : "bg-surface border border-surface-variant hover:bg-surface-container-lowest hover:ambient-shadow hover:border-transparent"
              }`}
            >
              {addr.isDefault && (
                <div className="absolute inset-0 rounded-2xl border border-outline-variant opacity-50 pointer-events-none" />
              )}

              <div className="flex justify-between items-start w-full">
                <h3 className="font-label-md text-label-md text-on-surface text-lg">
                  {addr.label}
                </h3>
                {addr.isDefault ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-xl bg-secondary-container/20 text-secondary text-xs font-label-sm font-semibold tracking-wider uppercase">
                    Default
                  </span>
                ) : (
                  <button
                    onClick={() => handleSetDefault(addr.id)}
                    className="text-xs font-label-sm text-outline hover:text-primary transition-colors focus:outline-none underline decoration-outline-variant underline-offset-4"
                  >
                    Set as Default
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-1 font-body-md text-body-md text-on-surface-variant">
                <p>{addr.fullName}</p>
                <p>{addr.street}</p>
                <p>
                  {addr.city}, {addr.state} {addr.postalCode}
                </p>
                {addr.phone && (
                  <p className="mt-2 flex items-center gap-2 text-sm text-outline">
                    <span className="material-symbols-outlined text-[18px]">
                      call
                    </span>
                    {addr.phone}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 mt-2 pt-4 border-t border-surface-variant">
                <button
                  onClick={() => openForm(addr)}
                  className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors focus:outline-none rounded-sm"
                >
                  Edit
                </button>
                <div className="w-px h-4 bg-outline-variant" />
                <button
                  onClick={() => handleDelete(addr.id)}
                  className="font-label-md text-label-md text-outline hover:text-error transition-colors focus:outline-none rounded-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm ? (
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col gap-4 mt-4 animate-fade-in"
        >
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {editingId ? "Edit Address" : "Add New Address"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="label"
              placeholder="Label (e.g. Home, Studio)"
              value={formData.label}
              onChange={handleInputChange}
              required
              className="p-3 bg-surface rounded-xl border border-outline-variant/30"
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="p-3 bg-surface rounded-xl border border-outline-variant/30"
            />
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={formData.street}
              onChange={handleInputChange}
              required
              className="p-3 bg-surface rounded-xl border border-outline-variant/30 md:col-span-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="p-3 bg-surface rounded-xl border border-outline-variant/30"
            />
            <input
              type="text"
              name="state"
              placeholder="State / Province"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="p-3 bg-surface rounded-xl border border-outline-variant/30"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              className="p-3 bg-surface rounded-xl border border-outline-variant/30"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-3 bg-surface rounded-xl border border-outline-variant/30"
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer mt-2">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleInputChange}
              className="rounded text-primary focus:ring-primary"
            />
            <span className="font-body-md text-sm text-on-surface">
              Set as default address
            </span>
          </label>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 rounded-full border border-outline-variant/30 text-primary font-label-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md"
            >
              Save Address
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => openForm()}
          className="w-full mt-4 flex items-center justify-center gap-3 py-6 rounded-2xl border-2 border-dashed border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary-fixed/10 transition-all duration-300 group"
        >
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
            add_circle
          </span>
          <span className="font-label-md text-label-md font-bold tracking-wide">
            Add New Address
          </span>
        </button>
      )}
    </section>
  );
}