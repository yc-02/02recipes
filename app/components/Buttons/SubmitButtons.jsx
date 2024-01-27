import { useFormStatus } from 'react-dom'



export function SigninButton() {
    const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className="btn-secondary mr-4">
      {pending && <span>Submitting...</span>}
      {!pending && <span>Sign in</span>}
  </button>
  )
}

export function SignupButton() {
  const { pending } = useFormStatus()
return (
  <button type="submit" disabled={pending} className="btn-secondary">
    {pending && <span>Submitting...</span>}
    {!pending && <span>Sign up</span>}
</button>
)
}

export function SubmitButton() {
  const { pending } = useFormStatus()
return (
  <button type="submit" disabled={pending} className="btn-secondary">
    {pending && <span>Submitting...</span>}
    {!pending && <span>Submit</span>}
</button>
)
}