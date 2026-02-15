export default function FormFields({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <input
        suppressHydrationWarning
        type="text"
        name="fullName"
        placeholder="Full Name"
        required
        value={formData.fullName}
        onChange={handleChange}
        className="input"
      />

      <input
        suppressHydrationWarning
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
        className="input"
      />

      <select
        suppressHydrationWarning
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="input"
      >
        <option value="prefer_not_to_say">Prefer not to say</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <input
        suppressHydrationWarning
        type="text"
        name="collegeName"
        placeholder="College Name"
        value={formData.collegeName}
        onChange={handleChange}
        className="input"
      />

      <input
        suppressHydrationWarning
        type="text"
        name="degree"
        placeholder="Degree"
        value={formData.degree}
        onChange={handleChange}
        className="input"
      />

      <input
        suppressHydrationWarning
        type="text"
        name="yearOfStudy"
        placeholder="Year of Study"
        value={formData.yearOfStudy}
        onChange={handleChange}
        className="input"
      />

      <input
        suppressHydrationWarning
        type="text"
        name="priorExperience"
        placeholder="Prior Experience"
        value={formData.priorExperience}
        onChange={handleChange}
        className="input"
      />

      <select
        suppressHydrationWarning
        name="source"
        value={formData.source}
        onChange={handleChange}
        className="input"
      >
        <option value="other">Other</option>
        <option value="instagram">Instagram</option>
        <option value="linkedin">LinkedIn</option>
        <option value="friend">Friend</option>
        <option value="college">College</option>
        <option value="google">Google</option>
        <option value="youtube">YouTube</option>
      </select>

      <input
        suppressHydrationWarning
        type="text"
        name="referredBy"
        placeholder="Referred By (optional)"
        value={formData.referredBy}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
}
