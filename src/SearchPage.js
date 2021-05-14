import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"



function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
             <TuneOutlinedIcon />
             <h2> FILTER </h2>
            </div>
            <hr/>

            <ChannelRow
              image=""
              channel="Henry Bentil"
              verified
              subs="698K"
              noOfVideos={382}
              description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the... "
             />

             <hr/>
             
             <VideoRow
             views="1.7M"
             subs="796K"
             description="Do you want a FREE one hour javascript and pything training... Check.."
             timestamp="30 minutes ago"
             channel="Henry Bentil"
             title="FREE python and javacript training within an HOUR!!!"
             image="https://i.ytimg.com/an_webp/tOK9l5uP06U/mqdefault_6s_480x270.webp?du=3000&sqp=CP655fkF&rs=AOn4CLBjajnD5bRsURK3xJpeylydNyfI4A"
              />

        

              <VideoRow
             views="1.7M"
             subs="796K"
             description="Do you want a FREE one hour javascript and pything training... Check.."
             timestamp="30 minutes ago"
             channel="Henry Bentil"
             title="FREE python and javacript training within an HOUR!!!"
             image="https://i.ytimg.com/an_webp/pKd0Rpw7O48/mqdefault_6s_480x270.webp?du=3000&sqp=CPWk5fkF&rs=AOn4CLCmbWj3vStGrR8M51NjH5hTtWPbhw"
              />

              <VideoRow
             views="1.7M"
             subs="796K"
             description="Do you want a FREE one hour javascript and pything training... Check.."
             timestamp="30 minutes ago"
             channel="Henry Bentil"
             title="FREE python and javacript training within an HOUR!!!"
             image="https://i.ytimg.com/vi/4deVCNJq3qc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD3wX5OB3kUKQt7q6B50X16Q1gbRg"
              />

              <VideoRow
             views="1.7M"
             subs="796K"
             description="Do you want a FREE one hour javascript and pything training... Check.."
             timestamp="30 minutes ago"
             channel="Henry Bentil"
             title="FREE python and javacript training within an HOUR!!!"
             image="https://i.ytimg.com/an_webp/MhkGQAoc7bc/mqdefault_6s.webp?du=3000&sqp=CNuW5fkF&rs=AOn4CLAoCOfVZAfWj7vM5hvuOE37Q6i2Iw"
              />
              <VideoRow
             views="1.7M"
             subs="796K"
             description="Do you want a FREE one hour javascript and pything training... Check.."
             timestamp="30 minutes ago"
             channel="Henry Bentil"
             title="FREE python and javacript training within an HOUR!!!"
             image="https://i.ytimg.com/vi/sBws8MSXN7A/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBnLmGUez0ppUKTwzU7jYXAjvEXrg"
              />
              <VideoRow
             views="1.7M"
             subs="796K"
             description="Do you want a FREE one hour javascript and pything training... Check.."
             timestamp="30 minutes ago"
             channel="Henry Bentil"
             title="FREE python and javacript training within an HOUR!!!"
             image="https://i.ytimg.com/an_webp/A71aqufiNtQ/mqdefault_6s.webp?du=3000&sqp=CIiw5fkF&rs=AOn4CLCt7UFcpsjDYj0AqSjz24o7KcWycA"
              />
              <VideoRow
             views="1.7M"
             subs="796K"
             description="Do you want a FREE one hour javascript and pything training... Check.."
             timestamp="30 minutes ago"
             channel="Henry Bentil"
             title="FREE python and javacript training within an HOUR!!!"
             image="https://i.ytimg.com/vi/BILdyaTvhFo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDn8Z_ZYG6a3eW7EgB9jtWQgon0QA"
              />
              <VideoRow
             views="1.7M"
             subs="796K"
             description="Do you want a FREE one hour javascript and pything training... Check.."
             timestamp="30 minutes ago"
             channel="Henry Bentil"
             title="FREE python and javacript training within an HOUR!!!"
             image="https://i.ytimg.com/an_webp/DQfeB_FKKkc/mqdefault_6s.webp?du=3000&sqp=COWw5fkF&rs=AOn4CLArt5vVPZPAhoARHZKnDx-WOh7HeQ"
              />
               


        </div>
    )
}

export default SearchPage
