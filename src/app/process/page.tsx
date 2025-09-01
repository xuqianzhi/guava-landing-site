import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageSocialMedia from '@/images/social-media.jpg'
import imageKOL from '@/images/kol.png'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function SocialMedia() {
  return (
    <Section title="Social Media" image={{ src: imageSocialMedia }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We build your social presence end-to-end on{' '}
          <strong className="font-semibold text-neutral-950">Rednote</strong>,{' '}
          <strong className="font-semibold text-neutral-950">Instagram</strong>,
          and <strong className="font-semibold text-neutral-950">TikTok</strong>
          —from handle setup and bios to brand kits, highlights, and
          link-in-bio. We define your content pillars, run fast{' '}
          <strong className="font-semibold text-neutral-950">
            content brainstorms + design
          </strong>
          , and map a NJ-focused calendarso every post serves a goal.
        </p>

        <p>
          Then we produce it: on-site{' '}
          <strong className="font-semibold text-neutral-950">filming</strong>{' '}
          and{' '}
          <strong className="font-semibold text-neutral-950">
            photoshoots
          </strong>
          , short-form scripts and shot lists, crisp{' '}
          <strong className="font-semibold text-neutral-950">
            video editing
          </strong>
          , tasteful{' '}
          <strong className="font-semibold text-neutral-950">Photoshop</strong>,
          captions, subtitles, and platform-native formats (vertical, hooks,
          sounds, stickers). Approvals stay light; quality stays high.
        </p>

        <p>
          Finally, we{' '}
          <strong className="font-semibold text-neutral-950">
            publish daily
          </strong>{' '}
          and optimize in the wild—geo-tags, neighborhood hashtags, and creator
          collabs. We watch performance in real time, iterate hooks and
          thumbnails, and roll wins into tomorrow’s posts.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Content pillars</TagListItem>
        <TagListItem>Brand kit</TagListItem>
        <TagListItem>Shot lists</TagListItem>
        <TagListItem>Filming & photos</TagListItem>
        <TagListItem>Video editing</TagListItem>
        <TagListItem>Daily publishing</TagListItem>
      </TagList>
    </Section>
  )
}

function KOLOutreach() {
  return (
    <Section title="KOL Outreach" image={{ src: imageKOL, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We run complete{' '}
          <strong className="font-semibold text-neutral-950">
            KOL (Key Opinion Leader)
          </strong>{' '}
          programs on{' '}
          <strong className="font-semibold text-neutral-950">Rednote</strong>{' '}
          and <strong className="font-semibold text-neutral-950">TikTok</strong>{' '}
          for{' '}
          <strong className="font-semibold text-neutral-950">New Jersey</strong>{' '}
          brands—connecting you with local creators whose audience matches your
          neighborhood, language, and target market.
        </p>

        <p>
          We handle everything:{' '}
          <strong className="font-semibold text-neutral-950">
            sourcing, vetting, outreach
          </strong>
          , negotiations, contracts,{' '}
          <strong className="font-semibold text-neutral-950">
            usage rights
          </strong>
          , and{' '}
          <strong className="font-semibold text-neutral-950">
            whitelisting
          </strong>
          . Each creator gets clear briefs and we manage scheduling to deliver{' '}
          <strong className="font-semibold text-neutral-950">
            8, 20, or 25 placements/month
          </strong>
          .
        </p>

        <p>
          Every campaign is trackable. Creators get{' '}
          <strong className="font-semibold text-neutral-950">
            unique links/codes
          </strong>
          , we monitor{' '}
          <strong className="font-semibold text-neutral-950">
            views → clicks → conversions
          </strong>{' '}
          with clean dashboards, and provide{' '}
          <strong className="font-semibold text-neutral-950">
            weekly reports
          </strong>{' '}
          plus{' '}
          <strong className="font-semibold text-neutral-950">
            content rights
          </strong>{' '}
          for your own use.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Xu', role: 'CEO of Yuzu' }}
        className="mt-12"
      >
        Guava’s KOL program matched us with NJ creators who actually influence
        our customers—clear briefs, smooth ops, and posts that drove real sales
        within weeks.
      </Blockquote>
    </Section>
  )
}

function MarketingStategy() {
  return (
    <Section title="Marketing Strategy" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We start with{' '}
          <strong className="font-semibold text-neutral-950">
            local-first discovery
          </strong>
          : define your target customers by neighborhood and language, audit
          competitors, and map winning offers. You get a{' '}
          <strong className="font-semibold text-neutral-950">
            positioning brief
          </strong>
          ,{' '}
          <strong className="font-semibold text-neutral-950">
            messaging strategy
          </strong>
          , and{' '}
          <strong className="font-semibold text-neutral-950">
            90-day roadmap
          </strong>{' '}
          tailored to New Jersey.
        </p>

        <p>
          Next, we design your{' '}
          <strong className="font-semibold text-neutral-950">
            campaign strategy
          </strong>{' '}
          across{' '}
          <strong className="font-semibold text-neutral-950">Rednote</strong>,{' '}
          <strong className="font-semibold text-neutral-950">TikTok</strong>,
          and{' '}
          <strong className="font-semibold text-neutral-950">Instagram</strong>
          —including content calendars, geo-targeting, creator partnerships, and
          paid amplification. We build funnels from{' '}
          <strong className="font-semibold text-neutral-950">
            discovery → conversion
          </strong>
          .
        </p>

        <p>
          Finally, we track and optimize everything. Clean{' '}
          <strong className="font-semibold text-neutral-950">dashboards</strong>{' '}
          and weekly testing guide budget and performance. We focus on{' '}
          <strong className="font-semibold text-neutral-950">
            results that matter
          </strong>
          —foot traffic, bookings, and orders—turning winners into repeatable
          campaigns.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Marketing Strategy Examples
      </h3>
      <List className="mt-8">
        <ListItem title="Special Holiday">
          Two-week push (e.g., Lunar New Year) with limited bundles, gift cards,
          and multilinggual creatives.
        </ListItem>
        <ListItem title="Pop-Up Event">
          Announce a 48-hour pop-up with creator RSVPs, map pins, and teaser
          reels.
        </ListItem>
        <ListItem title="Targeted Promotion">
          Daypart a lunch offer and whitelist a local KOL. Drive to a short menu
          page (click-to-map/call) and track via UTMs + POS codes.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow="Pricing" title="Simple, NJ-Smart Pricing">
        <p>
          Monthly plans bundling page builds, KOL outreach, and clear
          reporting—built for New Jersey businesses.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="$1999 - Social Media Management">
            End-to-end page builds for Rednote, Instagram & TikTok: content
            brainstorm + design, filming/photos, editing/PS, and daily
            publishing.
          </GridListItem>
          <GridListItem title="$999 - KOL Outreach">
            We source and manage 8 KOLs/month on Rednote & TikTok—briefs,
            whitelisting, and measurable results. Need more creators? Contact us
            to inquire about 20 or 25+/month plans.
          </GridListItem>
          <GridListItem title="$999 - Marketing Strategy Design & Execute">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Service & Pricing',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Services" title="What we do">
        <p>
          We believe in local-first growth: plan around New Jersey
          neighborhoods, speak the platform’s native language (Rednote, TikTok,
          Instagram), and earn trust through real creators. We keep it
          simple—clear offers, fast iteration, clean analytics—so every post,
          KOL collab, and spend is measured, improved, and tied to outcomes.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <SocialMedia />
        <KOLOutreach />
        <MarketingStategy />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
