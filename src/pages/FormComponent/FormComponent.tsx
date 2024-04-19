import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
})

type FormFields = z.infer<typeof schema>

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "test@test.com",
    },
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log(data)
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "E-mail already taken",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-component">
      <input {...register("email")} type="text" placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {errors.root && <span>{errors.root.message}</span>}
    </form>
  )
}

export default FormComponent
