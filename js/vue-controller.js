Vue.component('spendin-advisory-item', {
  // options
})

var appBitcoin = new Vue({
  el: '#appBitcoin',
  data: {
  	menuState: false,
  	globalPage: 'bank-accounts',
    assetBasic: true,
    assetBasicPage: "raison",
    assetSubCategory: 'cards',
    listOfPeopleForCollaborativeFunding: [],
    listOfSpendingsAdvisory: [{
    	title: "REFINANCE YOUR MORTGAGE",
    	content: "WE HAVE NOTICED THAT YOU SPEND 1,500.00 EUR MONTHLY AS YOUR MORTGAGE DUE. RAISON MIGHT HAVE AN OFFER TO OPTIMIZE YOUR MORTGAGE SPENDINGS.",
      link: 3      
    },
    {
    	title: "GET A FLIGHT MILES CREDIT CARD",
    	content: "RAISON HAS DETECTED THAT YOUR EXPENDITURES INCLUDE SEVERAL FLIGHTS A MONTH. WE HAVE AN OFFER WHICH WILL MAKE SOME OF YOUR FLIGHTS FREE.",
      link: 2
    },
    {
    	title: "More funds should be invested",
    	content: "ACCORING TO OUR OBSERVATIONS YOU EARN MORE THAN YOU SPEND ON MOST MONTHS. HOWEVER, YOUR AVAILABLE FUNDS ARE NEITHER BEIGN SPENT NOR WORKING FOR YOU. WE HAVE AN INVESTMENT SUGGESTIONS WHICH WILL FIX THIS.",
      link: 5
    }],
    randomCoeficient: Math.floor(Math.random() * (5 - 1)) + 1,
    advisooryPage: 1,
    sliderRiskValue: "1",
    sliderNumOfMoney: "12000",
    sliderMoneyCurrency: {
      title: "EUR",
      symbol: "€"
    },
    sliderNumOfMonth: "12",
    investAsset:{
      equities: 25,
      bondEtfs: 15,
      miningFund: 50,
      cryptocurrency: 20
    },
    listOfAssets: [{
    	title: "Bitcoin",
    	logo: "img/bm_img/bitcoin-logo.png",
    	currency: "USD",
    	price: "8900.64",
    	percentage: 7.178,
    	period: "24h",
    	symbol: "BTC",
    	status: false
    },{
    	title: "Ethereum",
    	logo: "img/bm_img/ethereum-logo.png",
    	currency: "USD",
    	price: "457.86",
    	percentage: -2.178,
    	period: "24h",
    	symbol: "ETH",
    	status: false
    },{
    	title: "Monero",
    	logo: "img/bm_img/monero-logo.png",
    	currency: "USD",
    	price: "158.63",
    	percentage: 7.178,
    	period: "24h",
    	symbol: "XMR",
    	status: false
    }],
    cryptoYouWantToBuy: '2.0000',
    cryptoRisk: 5,
    cryptoPage: 1,
    listOfFundingFriends: [],
    allFundingFriends: [{
    	title: "Andrew Kononyhin",
    	img: "img/image7425.png"
    },{
    	title: "Andrew Berezin",
    	img: "img/image3800.png"
    },{
    	title: "alexander zaytsev",
    	img: "img/image3857.png"
    },{
    	title: "alexandra stroganova",
    	img: "img/image5215.png"
    },{
    	title: "elena romanova",
    	img: "img/image3886.png"
    }],
    fundingPopupActive: false,
    fundingGlobalOBject:{
    	purpose: "Waldemar karcher's b-day",
    	value: "350"
    },
    activeFundingCandidate: {},
    pandingFundingCandidate: {},
    howMuchToContribute: 50,
    fundingPage: 1,
    realnumberContribution: 120,
    pendingSecondStatus: true,
    pendintStatus: true,
    assetStategyTime: 34,
    secondScreen: false
  },
  methods: {
    startTimeOutPen: function(){
      setTimeout(function(){
        appBitcoin.pendingSecondStatus=false;
        appBitcoin.realnumberContribution=appBitcoin.fundingGlobalOBject.value;
      }, 2000);
      setTimeout(function(){
        appBitcoin.fundingPage+=1;
      },3000);
    },
    mobUserCollab: function(){
      if(window.innerWidth < 750){
        setTimeout(function(){
          appBitcoin.howMuchToContribute=(appBitcoin.fundingGlobalOBject.value-appBitcoin.realnumberContribution)/2;
          appBitcoin.realnumberContribution+=appBitcoin.howMuchToContribute;

          appBitcoin.pendintStatus=false;
        },1600);
        setTimeout(function(){
          appBitcoin.realnumberContribution+=appBitcoin.fundingGlobalOBject.value-appBitcoin.realnumberContribution;
          appBitcoin.pendingSecondStatus=false;
        },4000);
        setTimeout(function(){
          appBitcoin.fundingPage+=1;
        },5000);
      }
    },
    CDT: function(){
      CDT()
    },
    changeContributionValue: function(){
      this.realnumberContribution =120+this.howMuchToContribute;
      this.pendintStatus = false
    },
    resetValues: function(){
      this.menuState = false;
      this.advisooryPage = 1;
      this.fundingPage = 1;
      this.cryptoPage = 1;
      this.listOfAssets= [{
        title: "Bitcoin",
        logo: "img/bm_img/bitcoin-logo.png",
        currency: "USD",
        price: "8900.64",
        percentage: 7.178,
        period: "24h",
        symbol: "BTC",
        status: false
      },{
        title: "Ethereum",
        logo: "img/bm_img/ethereum-logo.png",
        currency: "USD",
        price: "457.86",
        percentage: -2.178,
        period: "24h",
        symbol: "ETH",
        status: false
      },{
        title: "Monero",
        logo: "img/bm_img/monero-logo.png",
        currency: "USD",
        price: "158.63",
        percentage: 7.178,
        period: "24h",
        symbol: "XMR",
        status: false
      }];
      this.fundingPopupActive = false;
      this.fundingGlobalOBject = {
        purpose: "Waldemar karcher's b-day",
        value: "350"
      };
      this.activeFundingCandidate = {};
      this.pandingFundingCandidate = {};
      this.howMuchToContribute = 50;
      this.realnumberContribution = 120;
      this.pendingSecondStatus = true;
      this.pendintStatus = true;      
    },
    toggleGlobalPage: function(globalPageName){
  		this.globalPage= globalPageName;
      this.resetValues();
  	},
  	togglMenuState: function(){
  		this.menuState=!this.menuState
  	},
  	toggleAssetSubCategory: function(nameOfSubCategory){
  		this.assetSubCategory = nameOfSubCategory;
  	},
  	toggleAssetBasicPage: function(nameOfAssetPage){
  		this.assetBasicPage = nameOfAssetPage;
  	},
  	toggleCashflow: function(){
  		this.assetBasic=!this.assetBasic
  	},
  	resetActiveAsset: function(){
  		for(var i = 0; i < this.listOfAssets.length; i++ ){
  			if(this.listOfAssets[i].status == true){
  				this.listOfAssets[i].status==false;
  				break;
  			}
  		}
  	},
  	fundingCandidateActive: function(index){
  		this.activeFundingCandidate = this.allFundingFriends[index];
  	}
  },
  computed: {
    assetStrategyStringValue: function(){
      var hours = this.assetStategyTime % 24;
      var days = Math.ceil(this.assetStategyTime/24)-1;
      var stringResult = "";
      if(days==1) stringResult+=days+" day and ";
      else if(days>1) stringResult+=days+" days and ";
      if(hours==1) stringResult+=hours+" hour";
      else if(hours>1) stringResult+=hours+" hours";
      if(stringResult=="") stringResult = "1 day";
      if(stringResult=="1 day and ") stringResult = "2 days";
      if(stringResult=="2 days and ") stringResult = "3 days";
      return stringResult;
    },
    toFinishFunding: function(){
      return this.fundingGlobalOBject.value-this.realnumberContribution
    },
    floatPositionOfFirstScreen: function(){
      
      if(window.innerWidth > 750 && this.secondScreen) return 'left';
      else return 'none';
    },
    deadlineDate: function() {
      var date= new Date();
      date.setDate(date.getDate() + 7);
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var valueMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      return day + " " + valueMonth[month] + " " + year;
    },
  	currentAsset: function(){
  		for(var i = 0; i < this.listOfAssets.length; i++ ){
	  		if(this.listOfAssets[i].status == true){
	  			console.log(this.listOfAssets[i]);
	  			return this.listOfAssets[i];
	  			break;
	  		}
	  	}
	  	return {
	    	title: "Bitcoin",
	    	logo: "img/bm_img/bitcoin-logo.png",
	    	currency: "USD",
	    	price: "6618.64",
	    	percentage: 7.178,
	    	period: "24h",
	    	symbol: "BTC",
	    	status: false
	    }
  	},
  	cryptoYouWantToBuyCost: {
  		get: function(){
  			return (this.cryptoYouWantToBuy * this.currentAsset.price).toFixed(2);
  		},
  		set: function(newValue){
  			this.cryptoYouWantToBuy= (newValue / this.currentAsset.price).toFixed(4);
  			return newValue;
  		}
  	},
    numOfAdvisories: function(){
      return this.listOfSpendingsAdvisory.length;
    },
    sliderProfit: function(){
      var monthlyIncrease = 0;
      if(this.sliderRiskValue == '1') monthlyIncrease = 0.068;
      if(this.sliderRiskValue == '2') monthlyIncrease = 0.287;
      if(this.sliderRiskValue == '3') monthlyIncrease = 0.762;

      return (parseInt(this.sliderNumOfMoney) * monthlyIncrease *(parseInt(this.sliderNumOfMonth)/12)).toFixed(2);
    },
    candidatesToPending: function(){
      var arrayToReturn = [];
      for(var i=0;i<this.allFundingFriends.length;i++){
        if(this.allFundingFriends[i].img!=this.activeFundingCandidate.img){ 
          arrayToReturn.push(this.allFundingFriends[i]); 
        }
      }

      this.pandingFundingCandidate=arrayToReturn[arrayToReturn.length-1];
      arrayToReturn.pop();
      return arrayToReturn;
    }
  }
});