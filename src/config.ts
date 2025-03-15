import type {
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Quidditch Star',
  subtitle: 'A collection of thoughts and ideas',
  lang: 'en',      
  themeColor: {
    hue: 80,         
    fixed: false,     
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.jpg',   
    position: 'center',      
    credit: {
      enable: false,         
      text: '',              
      url: ''                
    }
  },
  toc: {
    enable: true,           
    depth: 2                
  },
  favicon: [    
    {
      src: '/favicon/quidditch.png',    
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/AayushBahukhandi/quidditchstar',     
      external: true,                              
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/pfp.webp', 
  name: 'Aayush Bahukhandi',
  bio: 'I am a software engineer ',
  links: [
    {
      name: 'Reddit',
      icon: 'fa6-brands:reddit-alien',      
      url: 'https://www.reddit.com/user/AayushBahukhandi',
    },
    {
      name: 'Discord',
      icon: 'fa6-brands:discord',
      url: 'https://discord.gg/aayushbahukhandi',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/AayushBahukhandi/quidditchstar',
    },
  ],
}

