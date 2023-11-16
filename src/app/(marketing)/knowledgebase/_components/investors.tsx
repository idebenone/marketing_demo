"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Investors = () => {
  const investorsFaq = [
    {
      q: "Why should you invest in startups?",
      a: "​Many of those who fund startups do so for several reasons: few feel moral obligation, few do it because they genuinely believe in theconcept, few take pride in what they do, few do it to diversify their portfolio and most to gain personal wealth. Yeah... if you invest wisely, you can make profit on your investment if the company grows and become more successful. We recommend, invest only in what you love and understand (you've expertise in). If you don't understand it, it may be a bad idea to invest. Investing should not be solely about earning a return. To invest in something as risky as astartup, you need more than conviction. It's pretty cool to learn about future industries when founders post updates.​​",
    },
    {
      q: "What sorts of companies you would be investing in?",
      a: "We look for 'Spark' + 'Awww' factor. It's our promise, every company you would see here on Pepcorns would be of next generation (driving innovation). You can expect anything and everything from medicines to pizza, from dog wellness products to cat shampoo, from space ships to red planet hotel chains, from robots to the next big crypto, everything is on the horizon.",
    },
    {
      q: "How much can I invest?",
      a: "​Now anybody can invest in their favourite startup, starting with as little as ₹1000. This token size varies depending on your risk appetite, sky is the limit.",
    },
    {
      q: "What happens to the funds after investment?",
      a: "Once you make an investment, funds will be held in an escrow account. The funds will be released from this account to the company after the campaign ends.",
    },
    {
      q: "How perks, equity, and rewards work?",
      a: "Everything you invest in is aligned with rewards and benefits. Rewards include premium membership, early access deals and more. If you are HNIs(Accredited), you may directly invest in equity. Investors, those who could not invest directly in equity, they can invest as part of startup community for equity equivalent benefits. Yeah... reward bhi profit bhi!",
    },
  ];

  const instruments = [
    {
      name: "Simple agreement for future equity (SAFE)",
      desc: "SAFE is usually termed as an equity derivative contract that converts the initial capital invested into the future stock of the company, based on contractual terms and conditions. Start-ups may prefer SAFE notes because, unlike convertible notes, they are not debt and therefore do not accrue interest (though for Indian legal compliance purposes, SAFE notes carry a non-cumulative dividend @ 0.0001% and are shown as CCPS).",
    },
    {
      name: "Convertible Notes (CN)",
      desc: "CNs are issued as a ‘debt instrument’ in the form of a loan. It can be issued only by a DPIIT-registered and recognized start-up company. These are issued initially as a debt, which is repayable at the option of the CN-holder. This instrument has proved to be less broad and user-friendly owing to the lack of numerous compliance requirements.",
    },
    {
      name: "Compulsorily Convertible Debentures (CCDs)",
      desc: "CCDs are hybrid securities as they are issued as debts but are compulsorily converted to equity shares of the issuing companies. Unlike Convertible Notes, CCDs can be issued by any private limited company. Section 71(1) of the Companies Act, 2013 authorizes a company to issue CCDs. According to the RBI Guidelines, they are treated as equity for all financial statements and records but not as Share Capital of the Company.",
    },
    {
      name: "Compulsorily Convertible Preferences Shares (CCPs)",
      desc: "CCPS offers fixed dividends in priority and compulsorily converted into equity shares at a predetermined event, not more than 20 years. These are the preferred choice and most favoured amongst investors mainly for two reasons, i.e., the dividend is first paid to preference shareholders, senior to equity or common shareholders and they are also given priority in the event of liquidation.",
    },
    {
      name: "Community Stock Option Pool (CSOP)",
      desc: "CSOPs are options that have the same financial rights as equity shares but no voting rights. It is purely a contractual agreement entered into between the startup and the investor for benefitting the investor from the financial benefits linked to the equity issued by the company.",
    },
    {
      name: "Stock Appreciation Rights (SARs)",
      desc: "A SAR or Phantom Shares is generally defined as the right to receive the benefit of the increase or appreciation in the value of company stock and it has been specifically defined by SEBI under Regulation 2 (1) (zf) of SEBI (Share Based Employee Benefits) Regulations, 2014. A SAR is normally paid in cash, although it could also be settled in the equivalent value of a stock.",
    },
  ];

  return (
    <div className="max-w-[800px]">
      <Tabs defaultValue="investors" className="w-full">
        <TabsList className="bg-background border border-b-0 w-full">
          <TabsTrigger value="investors">For Investors</TabsTrigger>
          <TabsTrigger value="investing">How investing works?</TabsTrigger>
          <TabsTrigger value="instruments">Instruments</TabsTrigger>
          <TabsTrigger value="return">Earning a return</TabsTrigger>
          <TabsTrigger value="fee">Pepcorns fee</TabsTrigger>
          <TabsTrigger value="risks">Risks</TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[750px] rounded-md border p-4">
          <TabsContent value="investors">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-3xl font-bold">For Investors</p>
                <p className="text-muted-foreground">
                  Everything you need to know about investing on Pepcorns.
                </p>
              </div>
              <hr />
              <div>
                <p className="text-3xl font-bold">Overview</p>
                <ul className="pl-5 list-disc mt-2 text-muted-foreground">
                  <li>
                    Explore highly vetted startups raising funds on Pepcorns.
                  </li>
                  <li>
                    Read about their business models, market strategies, and how
                    they are impacting the world.
                  </li>
                  <li>
                    Explore seamless opportunities with them, guide them on
                    their journey and help them grow. As these companies grow
                    and succeed, their investors will share in that economic
                    success.
                  </li>
                  <li>
                    You decide which company deserves funding. Business success
                    earns you rewards and money. You lose all your money if it
                    doesn't do well. Either way, you join a community of other
                    investors 'the crazy ones' who are eager to help a startup
                    succeed.​
                  </li>
                </ul>
              </div>
              <hr />
              {investorsFaq.map((val, ind) => (
                <div key={ind} className="flex flex-col gap-2">
                  <p className="text-3xl font-bold">{val.q}</p>
                  <p className="text-muted-foreground">{val.a}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="investing">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-3xl font-bold">How Investing works?</p>
                <p className="text-muted-foreground">
                  Process involved in investing in companies on Pepcorns
                </p>
                <p className="mt-2">
                  While building Pepcorns, our focus was on democratizing the
                  startup funding with fast transaction deal flows. Traditional
                  funding deals take months to finalize and execute. And so, we
                  have made the process 'simple and minimal' with all necessary
                  compliances.
                </p>
              </div>
              <hr />
              <div>
                <p className="text-3xl font-bold">How to?</p>
                <ul className="pl-5 list-disc mt-2 text-muted-foreground">
                  <li>
                    Sign up, and get your free account. Complete the required
                    details to get started, and you're ready to drive the
                    change!
                  </li>
                  <li>
                    Browse from a curated list of startups, which are of your
                    interest.
                  </li>
                  <li>
                    We recommend investors examine startups, check their market
                    presence, look out for moat, and vertical they are dealing
                    in. Make sure you understand the risks associated with the
                    investment
                  </li>
                  <li>
                    As you finalize the startup, choose your amount to invest
                    and complete your commitment.
                  </li>
                  <li>
                    As startups achieve milestones, they disburse rewards. In
                    the case of equity, they sign the term sheet and
                    formalities. In either case, to earn well you need to wait
                    and cheer them. In case, the company does not reach their
                    minimum funding goal, all funds will be returned to the
                    investors within 5 business days.
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="instruments">
            <div className="flex flex-col gap-8">
              {instruments.map((val, ind) => (
                <div key={ind}>
                  <p className="text-3xl font-bold">{val.name}</p>
                  <p className="text-muted-foreground mt-2">{val.desc}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="return">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-3xl font-bold">Earning a return</p>
                <p className="text-muted-foreground">How you realize profit?</p>
                <p className="mt-2">
                  Your returns depend on the investment you make and the rewards
                  you select.
                  <br />
                  <br />
                  Super early-stage startups use SAFE notes(Simple Agreement for
                  Future Equity). These will convert your investment to stock at
                  a later date if the company raises a "priced round" from major
                  investors, most often venture capitalists. At this point, you
                  are a shareholder owning equity, and you earn a return if the
                  value of that stock goes up over time, and you are able to
                  sell it.
                  <br />
                  <br /> ​​​​​​​​​If your reward is not equity, you get your
                  rewards, as your commitment freezes. And in a later stage,
                  you'll receive returns as the company offers EXIT.​​
                </p>
              </div>
              <hr />
              <div>
                <p className="text-3xl font-bold">
                  How long until I see a return?
                </p>
                <p className="text-muted-foreground mt-2">
                  An investment brings you return if a certain trigger event
                  occurs, such as an acquisition, an IPO, or buyback. Trigger
                  events sometimes occur sooner, but most don't occur for 4-6
                  years, and some ​may ​take even longer.​ Startups are​​
                  illiquid, and so finding new buyers is challenging. It took
                  Ashish Gupta 9 years in Flipkart, ​and ​Infoedge 10 years in
                  Zomato for crazy EXIT.​​​​
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  How is the return determined?
                </p>
                <p className="text-muted-foreground mt-2">
                  Straight answer is Vaulation. The post money valuation of your
                  invested amount in startup, determines your return. A
                  company's valuation aims to estimate its worth in the broader
                  sense, and the value of a company can be determined by looking
                  at many factors, such as the number of founders, business
                  moat, potential growth trends, assets owned, cash flow,
                  customer acquisition rate, and many more.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fee">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-3xl font-bold">Pepcorns Fee</p>
                <p className="text-muted-foreground">
                  What fees does Pepcorns charge to Investors
                </p>
              </div>
              <hr />
              <p>
                ​​Investing on Pepcorns is completely free, as Pepcorns charges
                fees to the companies seeking investment; or in case if it has
                to it may charge minimal for unavoidable charges.
                <br />
                <br />
                That being said, Pepcorns may charge its investors a commission
                of up to 3% for escrow agent, payment gateway, and compliance if
                not covered by the company. This fee will be charged to
                investors on top of the investment. Your total amount charged
                will be stated clearly on the investment form with processing
                fees (say, 2.5% processing fee).
              </p>
            </div>
          </TabsContent>

          <TabsContent value="risks">
            <div className="flex flex-col gap-8">
              <div className="">
                <p className="text-3xl font-bold">Risks</p>
                <p className="text-muted-foreground">
                  Risks involved in investing on Pepcorns
                </p>
                <p className="mt-2">
                  It is important to invest in accordance with your risk
                  appetite, which should not negatively impact your daily life.
                  Invest in what you have more than conviction. Every idea
                  doesn't turn Google, Tesla, Zomato, or Byzus but indeed which
                  win-wins big. Always diversify, don't put all your money in
                  one company instead put small chunks in multiple.
                </p>
              </div>
              <hr />
              <div>
                <p className="text-3xl font-bold">
                  Below are excerpts from our full Risk disclosure
                </p>
                <ul className="pl-5 list-disc mt-2 text-muted-foreground">
                  <li>
                    There is a possibility that you will need to hold your
                    investment indefinitely. Unlike investing in public listed
                    companies on the stock exchange, buying-selling shares could
                    be hard. Finding buyers in the private market could be
                    challenging.
                  </li>
                  <li>
                    Successful startups host many rounds of financings, all the
                    way to an IPO. For each financing, the startup issues
                    additional stock to the new investors. As long as the value
                    of the company increases with each funding round, this is
                    healthy and normal.
                  </li>
                  <li>
                    Unlike an investment in a mature business, where there is a
                    track record of revenue and income, the success of a
                    startup, early-stage companies often rely on the development
                    of a new product or services that may or may not find a
                    market.
                  </li>
                  <li>
                    Every registered company which raise on Pepcorns goes under
                    strict scrutiny and checks, but there is no way to control
                    others action.
                  </li>
                  <li>
                    The company shares business plan, offerings, updates,
                    finance, and use of proceeds, among other information. It’s
                    important to note that an early-stage company may be able to
                    provide only limited information about its business plan and
                    operations because of less resources.
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  How can I decrease the risk?
                </p>
                <p className="text-muted-foreground">
                  You are more likely to avoid losses by diversifying your
                  investments, focusing on areas in which you have the
                  expertise, and investing in startups whose products you
                  strongly believe in. Even professional investors have a
                  difficult time predicting exactly how startups will earn money
                  in the future (e.g., Google in 1999). Investing in what you
                  know and find personally valuable is an important signal of a
                  good investment.
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  How many investments should I make?
                </p>
                <p className="text-muted-foreground">
                  You can invest as many you want unless this negatively impacts
                  your life. We recommend making several small investments each
                  year rather than one large one.
                </p>
              </div>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};
