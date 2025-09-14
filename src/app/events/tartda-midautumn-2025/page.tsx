import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageSocialMedia from '@/images/social-media.jpg'

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

function EventOverview() {
  return (
    <Section
      title="Mid-Autumn Festival Celebration"
      image={{ src: imageSocialMedia }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Join Tart-Da this October for a special{' '}
          <strong className="font-semibold text-neutral-950">
            Mid-Autumn Festival celebration
          </strong>
          ! We&apos;re bringing together the best of French pastry artistry and
          traditional festival spirit in the heart of Jersey City.
        </p>

        <p>
          Our talented pastry chefs have crafted exclusive{' '}
          <strong className="font-semibold text-neutral-950">
            French tarts and Basque cakes
          </strong>{' '}
          with seasonal flavors perfect for this special occasion. Each creation
          honors both French culinary tradition and the festive spirit of
          Mid-Autumn.
        </p>

        <p>
          Experience the fusion of{' '}
          <strong className="font-semibold text-neutral-950">
            artisanal French baking
          </strong>{' '}
          with the warmth and togetherness that defines the Mid-Autumn Festival.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Festival Highlights
      </h3>
      <TagList className="mt-4">
        <TagListItem>Exclusive seasonal flavors</TagListItem>
        <TagListItem>French tart specialties</TagListItem>
        <TagListItem>Signature Basque cakes</TagListItem>
        <TagListItem>Social media contest</TagListItem>
        <TagListItem>Gift box giveaway</TagListItem>
        <TagListItem>Community celebration</TagListItem>
      </TagList>
    </Section>
  )
}

function SocialMediaContest() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              🌙 #TartDaMidAutumn2025 Contest
            </h2>
            <div className="mt-6 text-xl text-neutral-600">
              Share your Tart-Da moments and win an exclusive gift box!
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <FadeIn>
              <Border className="p-8">
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  How to Participate
                </h3>
                <List className="mt-6">
                  <ListItem title="Visit Tart-Da">
                    Come to our Jersey City location and enjoy our French tarts
                    or Basque cakes
                  </ListItem>
                  <ListItem title="Create Content">
                    Take photos or videos of your Tart-Da experience
                  </ListItem>
                  <ListItem title="Post & Tag">
                    Share on social media with{' '}
                    <strong>#TartDaMidAutumn2025</strong>
                  </ListItem>
                  <ListItem title="Wait for Magic">
                    We&apos;ll randomly select a winner on October 6th, 2025
                  </ListItem>
                </List>
              </Border>
            </FadeIn>

            <FadeIn>
              <Border className="p-8">
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  Grand Prize Details
                </h3>
                <div className="mt-6 space-y-4 text-base text-neutral-600">
                  <div className="rounded-lg bg-neutral-50 p-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neutral-950">
                        🥧 Prize Box Contains
                      </div>
                      <div className="mt-4 text-lg font-semibold text-neutral-950">
                        7 Premium Tarts
                      </div>
                      <div className="mt-2 text-neutral-600">
                        Your choice of flavors from our exclusive collection
                      </div>
                    </div>
                  </div>
                  <p>
                    The lucky winner will receive a beautifully curated gift box
                    featuring seven handcrafted tarts in flavors of their
                    choosing—perfect for sharing with family and friends during
                    the Mid-Autumn season.
                  </p>
                </div>
              </Border>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function EventDetails() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Event Information"
        title="Everything You Need to Know"
      >
        <p>
          Mark your calendars and get ready to celebrate the Mid-Autumn Festival
          with Tart-Da&apos;s exclusive event.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="📅 Contest Period">
            Event runs throughout September 2025. Post anytime with
            #TartDaMidAutumn2025 to enter the contest.
          </GridListItem>

          <GridListItem title="🎯 Winner Selection">
            Random selection on October 6th, 2025. Winner will be announced on
            our social media channels.
          </GridListItem>

          <GridListItem title="📍 Tart-Da Location">
            Visit our Jersey City bakery to experience our French tarts and
            Basque cakes. Share your visit with our hashtag!
          </GridListItem>

          <GridListItem title="🏆 Prize Redemption">
            Winner has 30 days to claim their prize box. Gift box includes 7
            tarts in flavors of your choice.
          </GridListItem>

          <GridListItem title="📱 Social Platforms">
            Contest valid on Instagram, TikTok, and Facebook. Make sure your
            post is public and includes our hashtag.
          </GridListItem>

          <GridListItem title="🌟 Bonus Points">
            Tag friends, share our story, or create video content for extra
            visibility. More engagement means more chances to be noticed!
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Tart-Da Mid-Autumn Festival 2025',
  description:
    'Join Tart-Da&apos;s Mid-Autumn Festival celebration! Share your moments with #TartDaMidAutumn2025 for a chance to win an exclusive gift box of 7 premium French tarts.',
}

export default function TartDaMidAutumn2025() {
  return (
    <>
      <PageIntro
        eyebrow="Special Event"
        title="Tart-Da Mid-Autumn Festival 2025"
      >
        <p>
          Celebrate the season with French artistry and traditional festival
          joy. Join our social media contest for a chance to win an exclusive
          tart gift box!
        </p>
      </PageIntro>

      <SocialMediaContest />
      <EventDetails />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
              Ready to Join the Celebration?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Visit Tart-Da today and share your experience with{' '}
              <span className="font-semibold text-neutral-950">
                #TartDaMidAutumn2025
              </span>
            </p>
            <div className="mt-8 inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-white">
              <span className="text-lg font-semibold">
                #TartDaMidAutumn2025
              </span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}
