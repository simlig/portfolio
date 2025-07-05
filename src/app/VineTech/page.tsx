"use client"
import React, { useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import KeyPointGrid from "../components/KeyPointGrid/KeyPointGrid";
import ImageContainer from "../components/ImageContainer/ImageContainer";

export default function vine() {

    const landingPageAnchor = useRef<HTMLDivElement | null>(null);
    const projectGridAnchor = useRef<HTMLDivElement | null>(null);
    const professionalExperienceListAnchor = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Navbar landingPageAnchor={landingPageAnchor} projectGridAnchor={projectGridAnchor} professionalExperienceListAnchor={professionalExperienceListAnchor}  ></Navbar>
      <div className="grid items-center justify-items-center min-h-[calc(100vh-40px)] py-8 px-8 md:px-16 lg:px-24 lg:pb-20 gap-16 bg-[#141e38] text-gray-200">
        {/* <div className=" justify-items-center min-h-[calc(100vh-40px)] p-8 pb-20 gap-16 bg-slate-900"> */}

        <div className={"text-[2.5rem] md:text-6xl font-bold text-center "}>
          VineTech
        </div>
        {/* <div className={"text-1xl font-bold text-center mb-8"}>
            2022 - 2023
          </div> */}
        {/* <KeyPointGrid></KeyPointGrid> */}

        <div>
          {/* 
                <ImageContainer imageUrl={"./VineTech/CrawfordBeck.png"} imageDescription={"Crawford Beck Vineyard"} ></ImageContainer> */}
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className={"order-1 md:order-2 lg:order-1"}>
              <ImageContainer
                imageUrl={"./VineTech/Rover_Outside.png"}
                imageDescription={"The Outside Of The Rover"}
                alt={"RoverOutside"}
              ></ImageContainer>
            </div>

            <div
              className={
                "order-2 md:order-1 lg:order-2 col-span-1 md:col-span-2 lg:col-auto"
              }
            >
              <ImageContainer
                imageUrl={"./VineTech/Rover_Inside.png"}
                imageDescription={"The Inside of the Rover"}
                alt={"RoverInside"}
              ></ImageContainer>
            </div>

            <div className={"order-3 md:order-3 lg:order-3"}>
              <ImageContainer
                imageUrl={"./VineTech/Rover_Front.png"}
                imageDescription={"The Front of the Rover"}
                alt={"RoverFront"}
              ></ImageContainer>
            </div>
          </div>
          <div className={"mt-4"}>
            The VineTech project has existed since 2016 and its goal is to
            utilize a series of machine learning algorithms to accurately
            predict the yield of{" "}
            <a href="https://www.crawfordbeck.com/">
              The Crawford Beck Vineyard{" "}
            </a>
            several weeks or months before harvest. This is important for
            vineyard owners, because without an accurate prediction of yield,
            hundreds of pounds of grapes would be wasted. Last year, Crawford
            Beck reported their estimate to be 72% accurate, while the VineTech
            estimate had an estimate of 98% accuracy. Previous teams were forced
            to manually take pictures of the vineyard rows using GoPros, but
            during the project's development an autonomous rover was created to
            take the images.
          </div>

          <br></br>
          <br></br>
        </div>
      </div>
      <div className="grid items-center justify-items-center min-h-[calc(100vh-40px)] py-8 px-8 md:px-16 lg:px-24 lg:pb-20 gap-16 bg-gray-800 text-gray-200">
        <h3 className={"text-4xl m-4"}>Goals</h3>
        <KeyPointGrid></KeyPointGrid>
        <div>
          When our team took over the project, we had three major goals to
          accomplish: fix the inaccurate bay assignments in the database in
          order to increase our predictions, implement adaptive cruise control
          so that the rover would maintain a constant speed regardless of
          topography and implement autonomous turning, so that the rover could
          navigate itself autonomously through the vineyard, instead of just a
          singular row.
        </div>

        <br></br>
      </div>
      <div className="grid items-center justify-items-center min-h-[calc(100vh-40px)] py-8 px-8 md:px-16 lg:px-24 lg:pb-20 gap-16 bg-gray-800 text-gray-200">
        <h3>Goal 1: Fix the inaccurate bay assignments</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4">
          <div className={"row-span-2 grid place-items-center"}>
            <ImageContainer
              imageUrl={"./VineTech/ExampleImageOfRow.png"}
              imageDescription={"A Vineyard Row"}
              alt={"ImageOfRow"}
            ></ImageContainer>
          </div>
          <ImageContainer
            imageUrl={"./VineTech/ExampleOfABayMarker.jpg"}
            imageDescription={"End of Bay Marker"}
            alt={"BayMarker"}
          ></ImageContainer>
          <ImageContainer
            imageUrl={"./VineTech/SpreadsheetOfWeights.png"}
            imageDescription={"Spreadsheet of Weights"}
            alt={"Weights"}
          ></ImageContainer>
        </div>

        <br></br>

        <div>
          Our specific vineyard was separated into 21 rows, each with 21 bays.
          Bays are separated from one another by a metal post. The first image
          is an example of such a metal post from the rover's view. The middle
          image is an example of our spreadsheet detailing the weights collected
          during harvest. After each harvest, the spreadsheet is taken and the
          weights recorded are associated with the images from that specific
          bay. This allows us to start making predictions based upon previously
          recorded images and weights. When these images are incorrectly
          labeled, it makes the predictions remarkably less accurate. The
          harvest season is typically in the early fall/late summer timeframe,
          which means we are taking most of our vineyard images in the summer,
          during higher temperatures. Unfortunately, the official max operating
          temperature of our GoPro GPS modules are approximately 95 degrees
          Fahrenheit, so there are times when we exceed that temperature while
          taking photos and our GPS meta data becomes inaccurate as a result.
        </div>

        <br></br>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageContainer
            imageUrl={"./VineTech/61Degrees.png"}
            imageDescription={"GPS Coordinates at 61 degrees Fahrenheit"}
            alt={"61Degrees"}
          ></ImageContainer>
          <ImageContainer
            imageUrl={"./VineTech/96Degrees.png"}
            imageDescription={"GPS Coordinates at 96 degrees Fahrenheit"}
            alt={"96Degrees"}
          ></ImageContainer>
        </div>
        <div>
          The two images shown here are some example plots from our validation
          scripts. These images are showing the GPS data recorded by each image
          with latitude on the x-axis, and the longitude running along the
          y-axis. The first image depicts a day in early June, where the GPS
          data is fairly accurate. The last image depicts a day in late August
          with a much higher temperature. This increase in temperature resulted
          in what we called “GPS drift”, which gave us incredibly inaccurate
          coordinates.
        </div>

        <br></br>

        <ImageContainer
          imageUrl={"./VineTech/Deviation.png"}
          imageDescription={"Image Count Per Bay"}
          alt={"Deviation"}
        ></ImageContainer>

        <div>
          In addition to our GPS visuals, we also created some visuals that
          would show us a plot of our image count distribution. Each point is
          colored by the number of images in that bay, and how much that number
          deviates from the average images per bay. The range for this day is +8
          over to -8 under. What this allows us to do is quickly glance at each
          day and determine the accuracy of how well we determined the row and
          bay numbers.
        </div>

        <br></br>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageContainer
            imageUrl={"./VineTech/EvidentPost.jpg"}
            imageDescription={"Image With A Clear Post"}
            alt={"EvidentPost"}
          ></ImageContainer>
          <ImageContainer
            imageUrl={"./VineTech/FalsePositivePost.jpg"}
            imageDescription={"Image With A Post In The Background"}
            alt={"FalsePositivePost"}
          ></ImageContainer>
        </div>

        <div>
          As a result of these data visuals, we determined that we needed a new
          way of assigning the row and bay numbers for each image. To do this we
          used a "post tagger". Our "post tagger" is a machine learning
          algorithm that (given some good test-data) is able to determine if a
          metal posts is in the image. This is used in conjunction with the
          timestamp data from each image to map an image to a particular bay.
          After doing this, we achieved an approximate accuracy of 96%. This 4%
          of error can be for a variety of reasons, but the most likely is that
          it saw a post for another bay through the vines as shown on the last
          image.
        </div>

        <br></br>

        <ImageContainer
          imageUrl={"./VineTech/HMM.png"}
          imageDescription={"Hidden-Markov Model"}
          alt={"HMM"}
        ></ImageContainer>

        <div>
          To address the accuracy issues with the “post-tagger”, we developed a
          Hidden-Markov Model that given the output of our post prediction
          model, is able to perform some pattern matching to determine if there
          was a false negative or a false positive. This is done by providing
          the model with a “typical pattern”, which can be mathematically
          determined based upon the total number of images for that given day.
          This was incredibly successful and allowed us to correct the 2019 and
          2020 datasets, and with a little bit of work, next years team should
          be able to quickly implement this for 2021, 2022, and by that point
          2023 data as well. Additional work is necessary because the rover
          images are formatted differently, so the image timestamps and other
          metadata from the new image structure will need to be determined.
        </div>

        <h3>Goal 2: Implement Adaptive Cruise Control</h3>

        <div>
          By comparing the current number of wheel rotations against an ideal
          number of wheel rotations in a given amount of time, we could decipher
          how we need to modify our speed in order to meet our ideal speed. This
          was achieved by using the rover's motor encoders, but we quickly that
          the encoders provided inconsistent readings depending on the speed. At
          slower speeds, it was completely accurate, but upon speeding up, the
          motor encoders would become inconsistent. With these inconsistent
          readings, it became impossible to utilize the motor encoders to solve
          this solution. This knowledge caused us to shift our solution to
          incorporate the rover's GPS. This process worked similarly to how the
          motor encoders calculated speed, but instead of utilizing wheel
          rotations, we utilized previous and current GPS coordinates.
        </div>

        <h3>Goal 3: Implement Autonomous Turning</h3>

        <ImageContainer
          imageUrl={"./VineTech/InitialState.jpg"}
          imageDescription={""}
          alt={"InitialState"}
        ></ImageContainer>

        <br></br>

        <div>
          Because we do not have a vineyard at George Fox University, we set up
          partitions in the Maker Hub to simulate vineyard rows. In this image,
          the rover autonomously navigated itself to the end of the simulated
          row and simply stopped when it could no longer see any rows on either
          side of it.
        </div>

        <br></br>

        <ImageContainer
          imageUrl={"./VineTech/RoverViewOfLiDAR.png"}
          imageDescription={""}
          alt={"RoverViewOfLiDAR"}
        ></ImageContainer>

        <br></br>

        <div>
          This is how the rover views the LiDAR data. The box in the middle is
          the rover and the clusters on either side are the rows. The rover
          determines these clusters by using a machine learning algorithm called
          a Gaussian Mixture Model, which takes the amount of clusters to look
          for and then automatically deciphers the best clusters from the data
          provided. Using this method, the rover can decipher where the majority
          of points lie in relation to itself, which is useful for deciding when
          to turn.
        </div>

        <br></br>

        <ImageContainer
          imageUrl={"./VineTech/TurningThreshold.png"}
          imageDescription={""}
          alt={"TurningThreshold"}
        ></ImageContainer>

        <br></br>

        <div>
          Once the majority of points are behind the rover, that means it has
          reached the end of a row. It then algorithmically determines a pivot
          point, which will be the end of the row for whichever side the rover
          is turning towards. In this example, that pivot point is the green
          circle that represents the end of the right row.
        </div>

        <br></br>

        <ImageContainer
          imageUrl={"./VineTech/LiDAROutputDuringTurn.png"}
          imageDescription={""}
          alt={"LiDAROutputDuringTurn"}
        ></ImageContainer>

        <br></br>

        <div>
          During a turn, the rover utilizes the pivot to adjust its angle based
          upon its distance from that point. After both rows are once again
          visible, the rover ceases to turn and continues to intelligently
          navigates itself down the row.
        </div>

        <br></br>

        <ImageContainer
          imageUrl={"./VineTech/SuccessfulTurn.gif"}
          imageDescription={""}
          alt={"SuccessfulTurn"}
        ></ImageContainer>

        <br></br>

        <div>
          In this successful turn, we can see the rover reach the end of a row,
          pick its pivot, adjust its turning angle based upon that pivot and,
          once it can perceive both sides of a row again, continue intelligently
          navigating forward to its next goal.
        </div>
      </div>
    </>
  );
}
