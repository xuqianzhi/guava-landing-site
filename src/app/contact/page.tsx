'use client'

import { useId, useState } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({
  label,
  error,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & {
  label: string
  error?: string
}) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className={`peer block w-full border bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:ring-neutral-950/5 focus:outline-hidden ${
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-neutral-300 focus:border-neutral-950'
        }`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold ${
          error
            ? 'text-red-500 peer-not-placeholder-shown:text-red-500 peer-focus:text-red-500'
            : 'text-neutral-500 peer-not-placeholder-shown:text-neutral-950 peer-focus:text-neutral-950'
        }`}
      >
        {label}
      </label>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: '',
      })
    }
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate form before submitting
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(
        'https://us-central1-guava-2dd45.cloudfunctions.net/store_contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      )

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        message: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Error submitting form:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      {isSubmitted ? (
        <div className="rounded-2xl bg-neutral-50 p-8">
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Thanks for reaching out!
          </h2>
          <p className="mt-3 text-neutral-600">
            We&apos;ve received your message and will get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Work inquiries
          </h2>
          {error && <p className="mt-3 text-red-600">{error}</p>}
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput
              label="Name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              error={fieldErrors.name}
              required
            />
            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              error={fieldErrors.email}
              required
            />
            <TextInput
              label="Phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              error={fieldErrors.phone}
            />
            <TextInput
              label="Company"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              error={fieldErrors.company}
            />
            <TextInput
              label="Industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              error={fieldErrors.industry}
            />
            <TextInput
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={fieldErrors.message}
              required
            />
          </div>
          <Button type="submit" className="mt-10" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      )}
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[['Inquiry', 'admin@guavaaa.com']].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let's work together">
        <p>We can&apos;t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
