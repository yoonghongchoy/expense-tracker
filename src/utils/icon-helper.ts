import {TransactionConstant} from '../constants';
import {
  faBaby,
  faBusAlt,
  faCar,
  faDonate,
  faDotCircle,
  faDumbbell,
  faGlobeAmericas,
  faHandHoldingUsd,
  faHome,
  faMoneyBillWave,
  faMoneyCheckAlt,
  faPaw,
  faPiggyBank,
  faPills,
  faShoppingBag,
  faShoppingBasket,
  faTheaterMasks,
  faToolbox,
  faUniversity,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

export const getCategoryIcon = (type: TransactionConstant.CategoryType) => {
  switch (type) {
    case TransactionConstant.CategoryType.AUTOMOBILE: {
      return faCar;
    }
    case TransactionConstant.CategoryType.BANK: {
      return faMoneyCheckAlt;
    }
    case TransactionConstant.CategoryType.CASH: {
      return faMoneyBillWave;
    }
    case TransactionConstant.CategoryType.CHARITY: {
      return faHandHoldingUsd;
    }
    case TransactionConstant.CategoryType.CHILDCARE: {
      return faBaby;
    }
    case TransactionConstant.CategoryType.EATING: {
      return faUtensils;
    }
    case TransactionConstant.CategoryType.EDUCATION: {
      return faUniversity;
    }
    case TransactionConstant.CategoryType.ENTERTAINMENT: {
      return faTheaterMasks;
    }
    case TransactionConstant.CategoryType.FITNESS: {
      return faDumbbell;
    }
    case TransactionConstant.CategoryType.GROCERIES: {
      return faShoppingBasket;
    }
    case TransactionConstant.CategoryType.LOAN: {
      return faDonate;
    }
    case TransactionConstant.CategoryType.MEDICAL: {
      return faPills;
    }
    case TransactionConstant.CategoryType.OTHERS: {
      return faDotCircle;
    }
    case TransactionConstant.CategoryType.PETS: {
      return faPaw;
    }
    case TransactionConstant.CategoryType.RENT: {
      return faHome;
    }
    case TransactionConstant.CategoryType.SAVING: {
      return faPiggyBank;
    }
    case TransactionConstant.CategoryType.SHOPPING: {
      return faShoppingBag;
    }
    case TransactionConstant.CategoryType.TRANSPORT: {
      return faBusAlt;
    }
    case TransactionConstant.CategoryType.TRAVEL: {
      return faGlobeAmericas;
    }
    case TransactionConstant.CategoryType.UTILITIES: {
      return faToolbox;
    }
  }
};
