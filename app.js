let pronoun = ["the", "our", "your", "my" ];
let adj = ["great", "big", "small", "pretty"];
let noun = ["jogger", "racoon", "ass", "girlfriend"];
let domain = [".com", ".es", ".net", ".edu"]

const mixedOfDomainNameGenerator = ( (firstList, secondList, ThirdList, fourthList) => {
  const combinationOfDomain = firstList.map( (first) => {
         secondList.map( (second) => { 
           ThirdList.map((third) => {
             fourthList.map((fourth) => {
               console.log(`${first}${second}${third}${fourth}`);
             });
           });
          });
    });
  });

  mixedOfDomainNameGenerator(pronoun,adj,noun,domain);