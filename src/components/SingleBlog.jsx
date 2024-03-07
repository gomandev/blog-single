import FeatureImageOne from '../assets/blog/feature-1.svg'
import FeatureImageTwo from '../assets/blog/feature-2.svg'
import BlogImg from '../assets/blog/Image.svg'
import ContentImg from '../assets/blog/content-Image.svg'
import ContentImg3 from '../assets/blog/image-3.svg'
import Avatar from '../assets/blog/Avatar.svg'
import {ReactComponent as HouseIcon} from '../assets/blog/house.svg'
import {ReactComponent as ChevIcon} from '../assets/blog/chev.svg'
import {ReactComponent as ArrowIcon} from '../assets/blog/Icon(1).svg'
import {ReactComponent as LinkIcon} from '../assets/blog/Icon.svg'

import {ReactComponent as CopyIcon} from '../assets/blog/copy.svg'
import {ReactComponent as TwitterIcon} from '../assets/blog/twit.svg'
import {ReactComponent as FacebookIcon} from '../assets/blog/face.svg'
import {ReactComponent as LinkedinIcon} from '../assets/blog/linked.svg'

import { Container } from './Container';


const colorNames = [
    "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", 
    "pink", "gray", 
    "fuchsia", "lime", "emerald", "cyan", "sky", "violet", 
  ]; 
  
  

function generateTagColors() {
    // Randomly select two colors (ensuring contrast)
    let lightColor, darkColor;
    do {
      lightColor = colorNames[Math.floor(Math.random() * colorNames.length)];
      darkColor = colorNames[Math.floor(Math.random() * colorNames.length)];
    } while (lightColor === darkColor || darkColor === "white" || lightColor === "black");
  
    // Apply Tailwind opacity classes
    return {
      lightColor: `${darkColor}-200`, 
      darkColor: `${darkColor}-800` 
    };
  }
  
  
  
  
  function Tag({ children }) {
    const { lightColor, darkColor } = generateTagColors();
  
    return (
      <span className={`bg-${lightColor} text-${darkColor} py-1 px-3 leading-none rounded-2xl flex justify-center items-center`}>
        {children}
      </span>
    );
  }

  export function BlogContent() {
  
    return (
      <Container>
        <img src={BlogImg} alt="blog" className='mt-16' />
        <div className="md:w-[45rem] m-auto">
        <h2 className="md:text-4xl text-2xl my-6 text-[#101828]">Introduction</h2>
        <p className="text-[#1C1C1C] text-lg leading-6">
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
        <br className='mb-6' />
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
        </p>
        <img src={ContentImg} alt="blog" className='mt-16' />
        <span className='text-[#475467] flex text-sm mb-16 mt-2'><LinkIcon className='mr-2' /> Image courtesy of Fauxels via Pexels</span>
        <p className="text-[#1C1C1C] text-lg leading-6">
        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
        </p>
        <div className="py-14">
            <div className="border-l-2 border-[#6941C6] py-2 pl-5">
                <blockquote className="text-4xl leading-9 italic mb-8 text-[#101828]">
                “In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”
                </blockquote>
                <span className='text-[#475467] text-2xl'>— Olivia Rhye, Product Designer</span>
                
            </div>
        </div>
        <p className='text-[#1C1C1C] text-lg leading-6'>
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                <div className="mb-6" />
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                <div className="mb-6" />
                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
            </p>
            <h4 className='md:text-2xl text-xl mb-4 mt-8'>Softwere Tools</h4>
            <p className='text-[#1C1C1C] text-lg leading-6'>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                <div className="mb-6" />
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
            </p>
            <h4 className='md:text-2xl text-xl mb-4 mt-8'>Other Recources</h4>
            <p className='text-[#1C1C1C] text-lg leading-6'>
            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
            <div className="mb-6" />
            1. Lectus id duis vitae porttitor enim gravida morbi.
            2. Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
            3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
            </p>
            <img src={ContentImg3} alt="blog" className='mt-16' />
            <span className='text-[#475467] flex text-sm mb-16 mt-2'><LinkIcon className='mr-2' /> Image courtesy of Michael Burrows via Pexels</span>
            <p className='text-[#1C1C1C] text-lg leading-6'>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                <div className="mb-6" />
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
            </p>
            <div className="bg-[#F9FAFB] p-8 rounded-2xl my-12">
            <h2 className="md:text-4xl text-2xl my-6 text-[#101828]">Conclusion</h2>
                <p className='text-[#1C1C1C] text-lg leading-6'>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
                <div className="mb-6" />
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
                <div className="mb-6" />
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.
                </p>
            </div>
            <div className="bg-[#EAECF0] w-full h-[1px]"></div>
            <div className="flex md:flex-row flex-col justify-between md:items-center items-left w-full mt-6">
                <div className="flex">
                    <img src={Avatar} alt="Avatar" />
                    <div className="ml-4">
                        <h4 className="text-[#101828] text-lg">Olivia Rhye</h4>
                        <p className="text-[#475467]">Product Designer</p>
                    </div>
                </div>
                <div className="flex gap-3 md:mt-0 mt-4">
                    <button className="border border-[#D0D5DD] text-sm bg-white text-[#344054] rounded-lg w-[7.68rem] h-10 flex justify-center items-center">
                        <CopyIcon className='mr-2' />

                        Copy Link
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-white flex justify-center items-center border border-[#D0D5DD]">
                        <TwitterIcon />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-white flex justify-center items-center border border-[#D0D5DD]">
                        <FacebookIcon />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-white flex justify-center items-center border border-[#D0D5DD]">
                        <LinkedinIcon />
                    </button>
                </div>
            </div>
            
        </div>
        <div className="bg-[#EAECF0] w-full h-[1px] mt-24"></div>
      </Container>
    );
  }

export function BlogHero() {
    return (
        <div className="min-h-[288px] flex justify-center items-center flex-col w-full bg-white">
            <div className="flex mb-[1.81rem] items-center">
                <HouseIcon className='mr-4' />
                <ChevIcon className='mr-4' />
                <p className="text-sm text-[#242424] leading-[14px] mr-4">Settings</p>
                <ChevIcon className='mr-4' />
                <p className="text-sm text-[#6941C6] leading-[14px] mr-4">Team</p>
            </div>
            <span className="text-[#6941C6] md:text-2xl text-sm mb-3">Published 20 Jan 2024</span>
            <h2 className="text-[#101828] md:text-[3.75rem] text-center text-[2.75rem] leading-[3rem] capitalize">UX review presentations</h2>
            <p className="md:text-3xl text-[28px] mb-[2.5rem] text-center mt-6">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
            <div className="flex gap-x-2">
                <Tag>Design</Tag>
                <Tag>Research</Tag>
                <Tag>Presentation</Tag>
            </div>
        </div>
    )
}


export function BlogList({ posts }) {
    return (
       <Container>
            <h2 className='text-[#101828] text-[2rem] mb-8 mt-24'>From the blog</h2>
            <p className="text-[#475467] text-xl mt-5 mb-16">The latest industry news, interviews, technologies, and resources.</p>
         <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-x-8 gap-y-16 mb-24">
            {posts.map((data, index) => (
                <div className="">
                <div className="mb-6 relative">
                    <img src={data.image} className='w-full object-cover' alt="Feature One" />
                    <div className="backdrop-blur absolute w-full top-[58%] flex justify-between items-center left-0 h-[88px] px-6">
                        <div className="text-white">
                            <p className="text-sm font-semibold">{data.name}</p> 
                            <p className="text-sm">{data.date}</p>
                        </div>
                        <p className="text-white">Design</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex w-full justify-between items-center my-2">
                        <h4 className="text-[#000000] text-2xl">{data.title}</h4>
                    </div>
                    <p className='text-[#2D2D2D]'>{data.content}</p>
                    <button className="text-sm flex justify-center items-center text-[#6941C6] mt-6">
                        Read post
                        <ArrowIcon className='ml-2' />
                    </button>
                </div>
            </div>
            ))}
        </div>
        <div className="bg-[#EAECF0] w-full h-[1px] mt-24"></div>
        <div className="ml-auto w-fit mt-4 mb-24">
            <Button onClick={null}>View all post</Button>
        </div>
       </Container>
    )
}

function Button({ children, size, onClick }) {
  
    return (
      <button className={`all-[unset] box-border flex ${size === "sm" ? "w-full lg:w-[183.58px] h-[52px]" : 'w-full lg:w-[304px] h-[54px]'} items-center justify-center pt-[6px] pb-[8px] px-[14px] bg-[#8959ff] rounded-[8px] overflow-hidden`} onClick={onClick}>
      <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
        {children}
      </div>
    </button>
    );
  }