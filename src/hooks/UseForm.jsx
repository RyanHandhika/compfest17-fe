import { useState, useCallback } from "react";

export function useForm(initialValues, validators = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      // Clear error on change
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors],
  );

  const handleBlur = useCallback(
    (e) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      // Run field validator on blur
      if (validators[name]) {
        const err = validators[name](values[name], values);
        setErrors((prev) => ({ ...prev, [name]: err || "" }));
      }
    },
    [validators, values],
  );

  const validate = useCallback(() => {
    const newErrors = {};
    Object.keys(validators).forEach((field) => {
      const err = validators[field](values[field], values);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    setTouched(
      Object.keys(validators).reduce((acc, k) => ({ ...acc, [k]: true }), {}),
    );
    return Object.keys(newErrors).length === 0;
  }, [validators, values]);

  const handleSubmit = useCallback(
    (onSubmit) => async (e) => {
      e.preventDefault();
      if (!validate()) return;
      setSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setSubmitting(false);
      }
    },
    [validate, values],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    submitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  };
}
