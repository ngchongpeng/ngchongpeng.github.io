import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  data: any = {
    title: null,
    body: null,
    authors: null,
    contributors: null,
    topics: null
  };

  constructor() {

    this.data.title = `
      <h5>
          <a href="https://www.accenture.com/sg-en/services/supply-chain-management-and-operations-index">Strategy
              & Consulting</a>
      </h5>
      <h6>
          <a href="https://www.accenture.com/sg-en/services/cloud-index">Supply Chain & Operations</a>
      </h6>
      <h1>
          Supply chain transformation on the cloud
      </h1>
      <h6>
          MAY 6, 2021
      </h6>
    `;

    this.data.body = `
        <div>
            <ul class="flex">
                <li>SHARE</li>
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Email</li>
            </ul>
        </div>
        <div>
            <p>
                Throughout the pandemic, all eyes have been on the supply chain. Supply chain leaders have been
                challenged to figure out how to quickly, cost-effectively, and responsibly meet ever-changing demand
                while ensuring their supply chains are as flexible as possible. If COVID-19 has taught us one thing,
                it’s that we can’t simply optimize for what the new normal is. There is no new normal. If a supply
                chain
                is to survive, it has to be resilient forever, so it can continuously evolve to respond effectively
                to
                whatever’s thrown at it.
            </p>
            <p>
                This is why the cloud has become critical to every supply chain. The cloud provides technologies
                that
                allow companies to process huge amounts of data—from virtually unlimited sources across the entire
                supply chain—at speeds and volumes never before possible. It enables companies to deeply analyze
                that
                data to generate critical business insights that can vastly improve decision making. And it allows
                companies to reconfigure how they work to gain the agility to deal with the consequences of whatever
                the
                data says. The cloud provides vast amounts of computing power, with a simple, flexible and
                affordable
                data and digital architecture, that opens up myriad possibilities for the supply chain—and enables
                leaders to manage service levels and cost, build in resilience and ensure responsible operations.
            </p>
            <h3>
                What’s the true value of the cloud?
            </h3>
            <p>
                When thinking about the value the cloud provides, many people still mainly think cost savings. And
                it’s
                true that the cloud does save companies money. By running applications in a public cloud, a company
                benefits from the economies of scale of thousands of customers while abandoning a highly customized
                solution and the costly maintenance it entails in favor of agile, best-in-class prebuilt components,
                managed by a service provider. But cost savings are just the beginning.
            </p>
            <p>
                The cloud drives speed, agility, scale and visibility. Companies using the cloud gain the
                flexibility to
                quickly adjust the amount of computing resources as needed, up or down; the ability to reduce the
                time
                (and cost) to develop and deploy new applications; the integration with a whole new world of
                players;
                and the visibility across operations and the entire value chain for faster, more-informed
                decision-making.
            </p>
            <p>
                The cloud also is a huge enabler of innovation. With the major cloud providers investing billions of
                dollars in new features every year, the cloud provides the foundation for affordable, unrestricted
                access to cutting-edge technologies and capabilities that would ordinarily be out of a company’s
                reach.
            </p>
            <p>
                Finally, the cloud plays a key role in responsibility and sustainability—especially when it comes to
                the
                supply chain. The cloud and efficient data computing help accelerate companies’ adoption of emerging
                technologies to reduce the supply chain’s environmental footprint and improve resource efficiency
                while
                increasing regulatory compliance and improving risk mitigation.
            </p>
            <h3>
                Where’s the opportunity today and tomorrow for the supply chain?
            </h3>
            <p>
                By fully embracing the cloud, supply chain executives will be able to influence all dimensions of
                the
                supply chain—engineering (product), planning, procurement, manufacturing, fulfillment and service—to
                create a supply chain that is:
            </p>

            <div class="row">
                <div class="col-md-2">
                    <img src="https://www.accenture.com/t20210113T130617Z__w__/sg-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Accenture-Brandspace-Icon/Monoline-Icons/65x65/Purple/Commerce/Chain-Accenture.png"
                        alt="">
                </div>
                <div class="col-md-10">
                    <h4>Interconnected</h4>
                    <p>
                        across the ecosystem
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <img src="https://www.accenture.com/t20201222T020059Z__w__/sg-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Accenture-Brandspace-Icon/Monoline-Icons/65x65/Purple/Web-And-Apps/Accenture-Dashboard.png"
                        alt="">
                </div>
                <div class="col-md-10">
                    <h4>Intelligent</h4>
                    <p>
                        through digitization, analytics and automation for traceability, agility and resiliency
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <img src="https://www.accenture.com/t20210310T124804Z__w__/sg-en/_acnmedia/Accenture/Conversion-Assets/DotCom/Images/Accenture-Brandspace-Icon/Monoline-Icons/65x65/Purple/People/Insight-Accenture.png"
                        alt="">
                </div>
                <div class="col-md-10">
                    <h4>Innovative</h4>
                    <p>
                        to replace a one-size-fits-all strategy with a tailored supply chain strategy
                    </p>
                </div>
            </div>
            <p>
                Attaining these goals may require a much more ambitious push to the cloud across the supply chain.
                All
                supply chain functions will have to embrace the cloud to tackle short-term and long-term challenges,
                including developing remote access to a wealth of data, cross-collaborating and collecting data in
                real
                time to quickly and appropriately improve customer experiences and reacting to unforeseen
                disruptions.
            </p>
            <p>
                The cloud has already made significant inroads in the procurement function, and this will continue.
                Planning and fulfillment, both currently with medium cloud penetration, also have high potential for
                future adoption. While cloud adoption in R&D and engineering is low today, there’s a big opportunity
                to
                expedite new product introduction through cloud-based product lifecycle management solutions.
                Manufacturing is slowly moving execution systems to the cloud and that will continue as the cloud is
                more accepted.
            </p>
        </div>
      `;

    this.data.authors = [
      { name: "KIRS TIMMERMANS", title: "Senior Managing Director – Strategy & Consulting, Supply Chain & Operations Global Lead", linkedin: "Linkedin", twitter: "Twitter" },
      { name: "DAVID SIMCHI-LEVI", title: "Professor of Engineering Systems at MIT and Head of the MIT Data Science Lab", linkedin: "Linkedin", twitter: "Twitter" },
      { name: "TRACEY COUNTRYMAN", title: "Managing Director – Strategy & Consulting, Supply Chain & Operations", linkedin: "Linkedin", twitter: null },
      { name: "FRANCOIS X. BOURBIGOT", title: "Managing Director – Strategy & Consulting, Supply Chain & Operations, Technology Strategy & Advisory", linkedin: "Linkedin", twitter: null },
      { name: "JORDI PARIS", title: "Managing Director – Strategy & Consulting, Supply Chain & Operations, Global", linkedin: "Linkedin", twitter: null }
    ];

    this.data.contributors = [
      { name: "CRAIG GOTTLIEB", title: "Managing Director – Strategy & Consulting, Aerospace & Defense, North America", linkedin: "Linkedin", twitter: "Twitter" },
      { name: "OLIVIER PROULX", title: "Senior Consultant – Strategy & Consulting, Supply Chain & Operations", linkedin: "Linkedin", twitter: null },
      { name: "STEVE PURICELLI", title: "Managing Director – Strategy & Consulting, Supply Chain & Operations", linkedin: "Linkedin", twitter: null }
    ];

    this.data.topics = [
      { img: "https://www.accenture.com/t20210129T182150Z__w__/sg-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/MOTT/26/Accenture-Deep-Transformation-105x105.jpg", title: "Supply Chain & Operations", text: "Digitalization of the supply chain" },
      { img: "https://www.accenture.com/t20210430T003514Z__w__/sg-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/MOTT/28/Accenture-Supply-Chain-Resilience-and-Cloud-105x105.jpeg", title: "Supply Chain & Operations", text: "Digitalization of the supply chain" },
      { img: "https://www.accenture.com/t20210603T100712Z__w__/sg-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/MOTT/28/Accenture-T21-Trend-Mirrored-World-105x105.jpeg", title: "Supply Chain & Operations", text: "What are the supply chain’s technology priorities?" }
    ]
  }

  ngOnInit() {
  }

}
