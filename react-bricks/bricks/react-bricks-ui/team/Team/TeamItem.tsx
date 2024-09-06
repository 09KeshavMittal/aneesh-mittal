import * as React from 'react'
import { Image, types, Text } from 'react-bricks/frontend'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { avatars } from '../../shared/defaultImages'

import blockNames from '../../blockNames'

export interface TeamItemProps {
  twitter?: string
  github?: string
  linkedin?: string
  picture: types.IImageSource
  memberName: types.TextValue
  jobTitle: types.TextValue
}

const TeamItem: types.Brick<TeamItemProps> = ({
  twitter,
  github,
  linkedin,
  picture,
  memberName,
  jobTitle,
}) => {
  return (
    <div className="relative flex flex-row items-stretch border border-gray-500  max-w-4xl mx-auto overflow-hidden mb-8"> {/* Container with border and rounded corners */}
      
      {/* Image Section */}
     
      <div className="w-2/3 flex-shrink-0 overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Image
          propName="picture"
          alt="team-item"
          source={picture}
          aspectRatio={1}
          imageClassName="w-full h-full object-cover hover: w-calc[(100% - 10px)]" // Ensure image fills container
        />
      </div>

      {/* Info Box (Right side of image) */}
      
      <div className="w-1/3 bg-[#d9b38c] p-6 flex flex-col justify-between transition-all duration-300 ease-in-out hover:w-[calc(100%+20px)]  hover:relative hover:left-[-20px] h-full "> {/* Expands on hover */}
        <div className="text-left flex-grow">
          {/* Name */}  
          <Text
            renderBlock={(props) => (
              <h4 className="text-xl font-bold mb-2">{props.children}</h4>
            )}
            propName="memberName"
            value={memberName}
            placeholder="Name..."
          />
          {/* Role */}
          <Text
            renderBlock={(props) => (
              <p className="text-md text-gray-700 mb-4">{props.children}</p>
            )}
            propName="jobTitle"
            value={jobTitle}
            placeholder="Role..."
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row space-x-4 mt-4">
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-500"
            >
              <FaTwitter />
            </a>
          )}
          {linkedin && (
            <a
              href={`https://linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-500"
            >
              <FaLinkedin />
            </a>
          )}
          {github && (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-500"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

TeamItem.schema = {
  name: blockNames.TeamItem,
  label: 'Team Member',
  category: 'team',

  getDefaultProps: () => ({
    memberName: 'John Doe',
    jobTitle: 'Software Engineer',
    twitter: '',
    github: '',
    linkedin: '',
    picture: avatars.USER,
  }),
  sideEditProps: [
    {
      groupName: 'Social Links',
      defaultOpen: true,
      props: [
        {
          name: 'twitter',
          label: 'Twitter UserName',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'linkedin',
          label: 'Linkedin UserName',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'github',
          label: 'Github UserName',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default TeamItem
