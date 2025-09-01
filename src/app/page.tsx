import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoFamilyFund from '@/images/clients/yuzu/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoPhobiaDark from '@/images/clients/lighteryou/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/lighteryou/logo-light.svg'
import logoUnseal from '@/images/clients/tartda/logo-light.svg'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Our team have worked with amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing social for a stronger New Jersey"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe Rednote, TikTok, and Instagram are the fastest way to grow
          local businesses. They’re also the noisiest—so we pair NJ-smart
          strategy with trusted KOLs to turn scrolls into customers.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you get discovered in NJ with social-led campaigns."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From Rednote, TikTok & Instagram setup to KOL activations and clear
          analytics—we turn local attention into customers.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Content Design">
              Platform-native creative for Rednote, TikTok & Instagram—hooks,
              scripts, shot lists, captions, and reusable templates that fit
              each feed.
            </ListItem>
            <ListItem title="KOL Outreach">
              We source, vet, and manage NJ-relevant creators on Rednote &
              TikTok—briefs, contracts, posting cadence, and performance
              tracking.
            </ListItem>
            <ListItem title="Branding">
              Social-first identity—logo lockups, color & type system, and
              post/reel/story templates to keep your brand consistent and
              recognizable.
            </ListItem>
            <ListItem title="Marketing Strategy">
              Local growth playbooks—audience research, geo-targeting, content
              calendars, offer testing, and clear analytics to turn attention
              into sales.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Guava Studio -
          </h1>
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Digital Marketing Agency based in New Jersey
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Rednote, TikTok & Instagram marketing built for local businesses
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Guava Studio went above and beyond on our funnel—rewrote the offer,
        simplified pricing, and turned checkout into a clean one-page flow.
        Within weeks, conversion jumped and sales climbed 30% without increasing
        ad spend.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
