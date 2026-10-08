import React, { useState } from "react";

export default function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", qty: 1 });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(v) {
    const e = {};
    if (v.name.trim().length < 2) e.name = "Name too short";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) e.email = "Enter a valid email";
    if (Number(v.qty) < 1) e.qty = "Qty must be ≥ 1";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(true);
  }

  if (done) {
    return (
      <div className="order-success">
        <p>Thanks, {form.name}! Order received.</p>
      </div>
    );
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Place Your Order</h2>

      <label>
        Name
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </label>
      {errors.name && <span className="field-error">{errors.name}</span>}

      <label>
        Email
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </label>
      {errors.email && <span className="field-error">{errors.email}</span>}

      <label>
        Quantity
        <input
          name="qty"
          type="number"
          value={form.qty}
          onChange={handleChange}
        />
      </label>
      {errors.qty && <span className="field-error">{errors.qty}</span>}

      <button type="submit">Place order</button>
    </form>
  );
}