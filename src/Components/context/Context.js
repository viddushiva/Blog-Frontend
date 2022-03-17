import React,{createContext,useState} from "react";

//! Context Data...
export const CategoryContext=createContext();
export const CategoryProvider=(props)=>{
    const [category,]=useState([
        {
            id:"1",
            category:"Movies",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/BeFunky-collage_47.jpg?OVAvCXNf_C2SrkYM4b7MZpPTM5FgNQUg&size=770:433",
            det:"Happy Birthday Puneeth Rajkumar! Mohanlal to Sarathkumar, celebs remember Power star on birth anniversary",
            date:"march 11, 2022",
            description:"It's Power Star Puneeth Rajkumar's first birth anniversary today, March 17. The Kannada superstar passed away on October 29, 2021, after suffering a massive heart attack. He was 46 years old. He is survived by his wife, Ashwini Puneeth Rajkumar, and two daughters, Drithi and Vandhita. On this special day, several South celebrities took to social media to remember him with sweet posts. Leading the wishes were Sarathkumar and Danish Sait.;"
        },
        {
            id:"2",
            category:"Movies",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/GettyImages-837153248_1_1200x768.jpeg?size=370:208",
            det:"Bappi Lahiri, India's Rockstar",
            date:"march 9, 2022",
            description:"appi Lahiri's music and stuck-up Bengali Maa-Babas had a weird relationship. They would normally describe cinema music with a scoff, an air of disdain. Music has to be Rabindra Sangeet or nothing at all. Sandhya Mukherjee would do if you must listen to film music. And if Hindi is what you've turned to, listen to Lata Mangeshkar. But there Bappi Lahiri had a different place, a bias, if you may, a Bengali pride, as it were. Amader Bappi, screen e Mithun. Duronto juti (Our Bappi, with Mithun Chakraborty on screen. An electric pair)! February 2022 took away all these three musical icons from me - Lata Mangeshkar on February 6, Sandhya Mukherjee and Bappi Lahiri on February 15."
        },
        {
            id:"3",
            category:"Movies",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/260231027_415473023702301_2517_1200x768.jpeg?7EbPg.gHKzFNoCeb1lMC1BdVFPXtXdL.&size=770:433",
            det:"Manushi Chhillar recalls childhood memories of Holi, gorging on gujiya and celebrating as a community",
            date:"March 17, 2022UPDATED: March 17, 2022 14:07 IST",
            description:"Manushi Chhillar loves the festival of colours, Holi. The actress, who is set to make her debut with the highly-anticipated film, Prithviraj opposite Akshay Kumar, has loved playing Holi ever since she was a kid."

        },
        {
            id:"4",
            category:"Movies",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Prabhas_pOoja_hegde_radhe_shya_2_1200x768.jpeg?5wVBBB6QBMmZ3ViOsH1YBjw2JP4.nfI4&size=770:433",
            det:"Radhe Shyam box office collection Day 6: Prabhas's film rakes in Rs 175 crore worldwide",
            date:"March 17, 2022UPDATED: March 17, 2022 08:46 IST",
            description:"Prabhas and Pooja Hegde's Radhe Shyam, directed by Radhe Shyam, is smashing the box office worldwide. The film received negative reviews from critics, yet it managed to collect Rs 175 crore worldwide within a week. Radhe Shyam is expected to continue its run for another week till SS Rajamouli's RRR hits the screens on March 25. If the trends are anything to go by, Radhe Shyam could end up collecting Rs 200 to Rs 250 crore by the end of its run."
            
        },
        {
            id:"5",
            category:"Business",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/IT_0_1200x768.jpeg?ptq3M2kOQUUKeueCTqheY71T5PJ4oDqw&size=770:433",
            det:"Covid impact: How IT outsourcing is booming worldwide",
            date:"March 17, 2022UPDATED: March 17, 2022 14:36 IST",
            description:"Ever since the onset of the Covid-19 pandemic, the demand for IT outsourcing has intensified. Propelled by rapid digitalization, perennial tech talent crunch and the rise of next-gen technologies like Robotic Process Automation (RPA) and Artificial Intelligence (AI), many companies are choosing to outsource IT services to remain relevant."
        },
        {
            id:"6",
            category:"Business",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/big_bazaar.jpeg_1200x768.png?0PP504TgJJ8lUGdgZzcLdzH9bgb5QIRU&size=770:433",
            det:"Amazon vs Reliance: Future of retail supremacy in India hangs in balance",
            date:"March 17, 2022UPDATED: March 17, 2022 15:48 IST",
            description:"Amazon and Future group have been locked in a complex legal stand-off for more than a year now. This has stalled Future's Rs 24,500 crore sale of assets to rival Reliance Industries."
        },
        {
            id:"7",
            category:"Business",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Income_Tax_Return_ITR_deductio_1_1200x768.jpeg?sWLRaFgBvxdPgCgaYt2WorcR.rMgPldd&size=770:433",
            det:"Income Tax saving scheme: SBI offers tax saving term deposits | Top points",
            date:"March 17, 2022UPDATED: March 17, 2022 17:57 IST",
            description:"The State Bank of India (SBI) is offering an Income Tax savings scheme. SBI customers can avail tax benefits under section 80C of the Income Tax Act."
        }, 
        {
            id:"8",
            category:"Business",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/share_market_today_1200x768.jpeg?HDsvNpDOXLwsZ.e1sTGucqDYPdU7_T.Y&size=770:433",
            det:"Sensex rises 1,000 points, Nifty closes at 17,287 on financials boost, US Fed hike",
            date:"March 17, 2022UPDATED: March 17, 2022 16:30 IST",
            description:"The Sensex and Nifty ended the holiday-shortened week about 4 per cent higher on Thursday, underpinned by heavyweight financials, with risk sentiment buoyed by a rally in global markets after the US Federal Reserve hiked benchmark rates."
        },
        {
            id:"9",
            category:"Sports",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/MS_DHoni_CSK__1__1200x768.jpeg?hoci8Yw5UlN6Upmg8XEeyypSokKH86P3&size=650:363",
            det:"In Pics: Seven times when MS Dhoni stunned fans with his hairstyles",
            date:"March 11, 2021, 15:34 PM IST ",
            description:"Former India skipper MS Dhoni was on Saturday (July 30) spotted with a new hairstyle and beard look in a series of photos which was posted by famous hairstylist Aalim Hakim. Interestingly, Dhoni’s trendy faux hawk haircut made him look muh younger and the look immediately went viral on the internet.",
        },
        {
            id:"10",
            category:"Sports",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/Faf_du_1200x768.jpeg?2UqbcXbSE6yo8VaBdH_iTKtTauNo_8_w&size=650:363",
            det:"dupli as rcb new captain ?",
            date:"March 11, 2021, 15:34 PM IST ",
            description:"Royal Challengers Bangalore on Saturday announced Faf du Plessis as their captain for the new Indian Premier League (IPL) season.The 37-year-old veteran batsman, who has been part of the Chennai Super Kings for many years and also opened the batting for them, was among the top buys for RCB which bought 19 players at the IPL Mega Auction. Du Plessis was handed over the cap by team’s chairman Prathmesh Mishra and director cricket operations Mike Hesson in a virtual event.",
        },
        {
            id:"11",
            category:"Sports",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/MI_training__1__1200x768.jpeg?iJ1BivAzPn_vy1iAKRBT228ewjembAlW&size=650:363",
            det:"In Pics: Seven times when MS Dhoni stunned fans with his hairstyles",
            date:"March 11, 2021, 15:34 PM IST ",
            description:"Former India skipper MS Dhoni was on Saturday (July 30) spotted with a new hairstyle and beard look in a series of photos which was posted by famous hairstylist Aalim Hakim. Interestingly, Dhoni’s trendy faux hawk haircut made him look muh younger and the look immediately went viral on the internet.",
        },
        {
            id:"12",
            category:"Sports",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/Closing_ceremony__2__1200x768.png?z8bFGTPFxLIWmN5h594vp4XQUfOsl4HP&size=650:363",
            det:"In Pics: Seven times when MS Dhoni stunned fans with his hairstyles",
            date:"March 11, 2021, 15:34 PM IST ",
            description:"Former India skipper MS Dhoni was on Saturday (July 30) spotted with a new hairstyle and beard look in a series of photos which was posted by famous hairstylist Aalim Hakim. Interestingly, Dhoni’s trendy faux hawk haircut made him look muh younger and the look immediately went viral on the internet.",
        },
        
        {
            id:"13",
            category:"Politics",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/styles/magazine_top_story_483x271/public/images/story/202203/COVER_STORY-647x363.jpeg?8QSdqWITNVRnXiM0LXlf0AutfR_AqS1g",
            det:"Modi+Yogi = BJP's new winning formula  ",
            date:"march 11, 2022 09:53 (IST)",
            description:"If there was a turning point behind the historic back-to-back victories of the Bharatiya Janata Party (BJP) in Uttar Pradesh, India’s most populous state, it came late last year and under the most unusual of circumstances. In November 2021, just before the saffron party formally launched its campaign for the election to the state assembly, there were loud rumblings against Chief Minister Yogi Adityanath within the party. The word was that the mahant-turned-politician was arrogant and ran the state government pretty much as his own fiefdom without involving cabinet colleagues in decisions or accommodating the party’s sensitivities. Some even called for a change of CM as had been done in neighbouring Uttarakhand as well as in Gujarat and distant Karnataka. It was at this point that Prime Minister Narendra Modi decided to step in and throw his weight decisively behind the saffron-clad monk..",
        },
        {
            id:"14",
            category:"Politics",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Bhagwant_Mann_1200x768_0.jpeg?size=483:271",
            det:"Won't taunt opponents or indulge in petty politics: Punjab CM Bhagwant Mann",
            date:"TNN / Updated: mar 11, 2022, 05:15 IST ",
            description:"Aam Aadmi Party (AAP) leader Bhagwant Mann, who was sworn in as Punjabs 17th chief minister on Wednesday, said he would not ridicule or provoke his political opponents. Addressing his supporters in Khatkar Kalan, the ancestral village of legendary freedom fighter Bhagat Singh, in Nawanshahr district, Bhagwant Mann said: “I will not indulge in petty politics.”Aam Aadmi Party (AAP) leader Bhagwant Mann, who was sworn in as Punjab’s 17th chief minister on Wednesday, said he would not ridicule or provoke his political opponents. Addressing his supporters in Khatkar Kalan, the ancestral village of legendary freedom fighter Bhagat Singh, in Nawanshahr district, Bhagwant Mann said: “I will not indulge in petty politics.lorem100"},

           
            
          
        {
            id:"15",
            category:"Politics",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/ay.jpeg?5WIffBEWumtNCR6c1DaXbQqXaj_O6a_l&size=770:433",
            det:"If Kashmir Files can be made, then why can’t Lakhimpur Files, asks Akhilesh Yadav",
            date:"viddu / TNN / Updated: mar 11, 2022, 09 .15 IST",
            description:"Former Chief Minister of UP and Samajwadi Party (SP) President, Akhilesh Yadav, on Wednesday, said that if the movie The Kashmir Files can be made on Kashmir, then Lakhimpur Files can also be made. The SP leader was speaking to reporters in Sitapur, in UP, for the first time after the party’s defeat in it",
        },
     
    ])
    return(
        <CategoryContext.Provider value={[category]}>
            {props.children}
        </CategoryContext.Provider>
    )
}
