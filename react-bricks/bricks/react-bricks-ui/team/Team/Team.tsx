import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import blockNames from '../../blockNames'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import { avatars } from '../../shared/defaultImages'
import TitleSubtitle from '../../shared/components/TitleSubtitle'

export interface TeamProps extends LayoutProps {
  withTitle?: boolean
  bigCenteredTitle?: boolean
  title: types.TextValue
  subtitle: types.TextValue
  members: types.RepeaterItems
}

const Team: types.Brick<TeamProps> = ({
  withTitle = false,
  bigCenteredTitle = false,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  title,
  subtitle,
  members,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        {withTitle && (
          <TitleSubtitle
            className={classNames(bigCenteredTitle ? 'mb-12' : 'mb-8')}
            bigCentered={bigCenteredTitle}
            title={title}
            subtitle={subtitle}
          />
        )}
          <div
            className={classNames(
              'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8',
              {
                'lg:grid-cols-3 lg:gap-10 xl:grid-cols-3': width === 'medium',
              }
            )}
          >
          <Repeater propName="members" items={members} />
        </div>
      </Container>
    </Section>
  )
}
Team.schema = {
  name: blockNames.Team,
  label: 'Team',
  category: 'team',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Team/Team.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.Team}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    withTitle: true,
    bigCenteredTitle: false,
    title: 'Meet our team',
    subtitle:
      'We are a group of passionate people with the mission to make content editing fun. For everybody.',
    members: [
      {
        memberName: 'Alvin Payne',
        jobTitle: 'Frontend Developer',
        twitter: 'alvin_payne',
        linkedin: 'alvin_payne',
        picture: avatars.AVATAR_MALE,
      },
      {
        memberName: 'Catherine Smith',
        jobTitle: 'Backend Developer',
        twitter: 'catherine_smith',
        linkedin: 'catherine_smith',
        github: 'catherine_smith',
        picture: avatars.AVATAR_FEMALE,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'members',
      itemType: blockNames.TeamItem,
      itemLabel: 'Member',
      min: 0,
      max: 20,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Team',
      defaultOpen: true,
      props: [
        {
          name: 'withTitle',
          label: 'With title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'bigCenteredTitle',
          label: 'Big centered',
          type: types.SideEditPropType.Boolean,
          show: (props) => !!props.withTitle,
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}
export default Team
