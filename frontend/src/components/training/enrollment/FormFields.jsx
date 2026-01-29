"use client";

export default function FormFields({ value, onChange }) {
  const update = (key, val) =>
    onChange((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="space-y-10">
      {/* ================= APPLICANT DETAILS ================= */}
      <Section title="Personal Information">
        <Grid>
          <Input
            label="Full Name"
            required
            value={value.fullName}
            onChange={(e) => update("fullName", e.target.value)}
          />

          <Input
            label="Email Address"
            value={value.email}
            disabled
          />

          <Input
            label="Phone Number"
            required
            value={value.phone}
            onChange={(e) => update("phone", e.target.value)}
          />

          <Select
            label="Gender"
            value={value.gender}
            onChange={(e) => update("gender", e.target.value)}
            options={[
              { value: "prefer_not_to_say", label: "Prefer not to say" },
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
        </Grid>
      </Section>

      {/* ================= EDUCATION ================= */}
      <Section title="Education & Background">
        <Grid>
          <Input
            label="College / University"
            value={value.collegeName}
            onChange={(e) => update("collegeName", e.target.value)}
          />

          <Input
            label="Degree / Course"
            value={value.degree}
            onChange={(e) => update("degree", e.target.value)}
          />

          <Input
            label="Year of Study"
            placeholder="e.g. 2nd Year, Final Year"
            value={value.yearOfStudy}
            onChange={(e) => update("yearOfStudy", e.target.value)}
          />

          <Textarea
            label="Prior Experience (if any)"
            placeholder="Internships, projects, skills..."
            value={value.priorExperience}
            onChange={(e) => update("priorExperience", e.target.value)}
          />
        </Grid>
      </Section>

      {/* ================= DISCOVERY ================= */}
      <Section title="How did you hear about us?">
        <Grid>
          <Select
            label="Source"
            value={value.source}
            onChange={(e) => update("source", e.target.value)}
            options={[
              { value: "instagram", label: "Instagram" },
              { value: "linkedin", label: "LinkedIn" },
              { value: "friend", label: "Friend" },
              { value: "college", label: "College" },
              { value: "google", label: "Google" },
              { value: "youtube", label: "YouTube" },
              { value: "other", label: "Other" },
            ]}
          />

          <Input
            label="Referred By (optional)"
            value={value.referredBy}
            onChange={(e) => update("referredBy", e.target.value)}
          />
        </Grid>
      </Section>
    </div>
  );
}

/* ================== UI HELPERS ================== */

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  );
}

function Input({ label, required, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        className="
          w-full rounded-lg border border-gray-300
          px-3 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div className="space-y-1 md:col-span-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        {...props}
        rows={4}
        className="
          w-full rounded-lg border border-gray-300
          px-3 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...props}
        className="
          w-full rounded-lg border border-gray-300
          px-3 py-2 text-sm bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
