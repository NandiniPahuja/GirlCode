import React, { Component } from "react";
import PageHeader from "../generalComponent/PageHeader";
import { Domain, GeneralHeaders, LargeConatiner, COLORS } from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
import YoutubeEmbed from "../YouTube";
import Table4 from "../module 4/Table4";

export default class Mod3Index extends Component {
  constructor() {
    super();
    this.state = {
      band: 0,
    };
  }

  toggleBand = (e) => {
    this.setState({
      band: e.target.value,
    });
  };

  render() {
    return (
      <div className="newdiv1">
        <Domain>
          <PageHeader title={"Machine Learning"}></PageHeader>

          <GeneralDiv
            style={{
              height: "50px",
              marginBottom: "40px",
              marginLeft: "10%",
              borderRadius: "5px",
              color: COLORS.color5,
              padding: "15px",
            }}
            width="80%"
          >
            <a
              href="https://medium.com/@adithnarasimhan/machine-learning-basics-answered-9be3afeeba60"
              style={{ color: "snow", textDecoration: "none" }}
            >
              Click here to read a blog on ML
            </a>
          </GeneralDiv>

          <LargeConatiner
            style={{
              height: "auto",
              minHeight: "1020px",
              paddingBottom: "50px",
            }}
            id="lrgContEdu"
          >
            <GeneralHeaders style={{ textAlign: "center", marginBottom: "20px" }}>
            WHAT'S THE TEA ON MACHINE LEARNING? ☕✨
            </GeneralHeaders>
            <GeneralDiv
              style={{
                background: "inherit",
                boxShadow: "none",
                minHeight: "70%",
                height: "auto",
                fontFamily: `"Heebo", sans-serif`,
                fontSize: "18px",
                lineHeight: "1.6",
                padding: "30px",
                textAlign: "left",
              }}
            >
              Hey gorgeous! 💅 Ever wondered how Netflix just knows what show you're binge-watching next or
               how your phone's camera makes you look like a total queen? 👑 Well, babe, it’s all thanks to
                this fab tech called Machine Learning! 🌟<br /> <br />
              So, let's break it down—Machine Learning (ML) is like that smart friend who’s always got your
               back. It’s when computers learn from a bunch of data (like your fave fashion trends or Insta posts)
                and then predict what’s gonna happen next. Imagine having your own digital BFF who knows you
                 better than you know yourself. 🤯<br /> <br />
              Think of ML as a glow-up for your tech—like taking your selfies from drab to fab with just one
               filter! 💁‍♀️ It’s everywhere, darling! From scrolling through your TikTok feed to those personalized 
               shopping recommendations that totally understand your style. 🛍️ 🌈✨<br /> <br />
              And the best part? You don’t need to be a total tech geek to get into it. ML is super
               accessible, and trust me, it's the future, honey! 🌸 So, if you’re ready to slay the 
               tech game and level up your coding skills, Machine Learning is your runway to shine. 🚀<br /> <br />
              Ready to dive in? Check out this super cute ML tutorial for beginners that will have 
              you saying, "OMG, I’m a tech queen!" 👸
              <br /> <br />
            </GeneralDiv>

            <GeneralDiv
              style={{
                height: "200px",
                width: "50%",
                background: "inherit",
                boxShadow: "none",
                marginLeft: "25%",
                marginTop: "20px",
              }}
            >
              <Table4 />
            </GeneralDiv>
          </LargeConatiner>

          <YoutubeEmbed
            embedId="bknUn7yMwNI" // New video ID
            link="https://www.youtube.com/embed/" // Link prefix
          />
        </Domain>
      </div>
    );
  }
}
