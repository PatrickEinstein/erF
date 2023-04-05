import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RecommendationsImplication } from "./recommendationImplicationLogic";

export const Suggestions1 = () => {
  const isresult = useSelector((state) => state.result);
  const cat1 = isresult.cat1;
  return <RecommendationsImplication cat={cat1} r1="" r2="" r3="" r4="" r5="" />;
};

export const Suggestions2 = () => {
  const isresult = useSelector((state) => state.result);
  const cat2 = isresult.cat2;
  return <RecommendationsImplication cat={cat2} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions3 = () => {
  const isresult = useSelector((state) => state.result);
  const cat3 = isresult.cat3;
  return <RecommendationsImplication cat={cat3} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions4 = () => {
  const isresult = useSelector((state) => state.result);
  const cat4 = isresult.cat4;
  return <RecommendationsImplication cat={cat4} r1="" r2="" r3="" r4="" r5="" />;
};

export const Suggestions5 = () => {
  const isresult = useSelector((state) => state.result);
  const cat5 = isresult.cat5;
  return <RecommendationsImplication cat={cat5} r1="" r2="" r3="" r4="" r5="" />;
};

export const Suggestions6 = () => {
  const isresult = useSelector((state) => state.result);
  const cat6 = isresult.cat6;
  return <RecommendationsImplication cat={cat6} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions7 = () => {
  const isresult = useSelector((state) => state.result);
  const cat7 = isresult.cat7;
  return <RecommendationsImplication cat={cat7} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions8 = () => {
  const isresult = useSelector((state) => state.result);
  const cat8 = isresult.cat8;
  return <RecommendationsImplication cat={cat8} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions9 = () => {
  const isresult = useSelector((state) => state.result);
  const cat9 = isresult.cat9;
  return <RecommendationsImplication cat={cat9} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions10 = () => {
  const isresult = useSelector((state) => state.result);
  const cat10 = isresult.cat10;
  return <RecommendationsImplication cat={cat10} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions11 = () => {
  const isresult = useSelector((state) => state.result);
  const cat11 = isresult.cat11;
  return <RecommendationsImplication cat={cat11} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions12 = () => {
  const isresult = useSelector((state) => state.result);
  const cat12 = isresult.cat12;
  return <RecommendationsImplication cat={cat12} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions13 = () => {
  const isresult = useSelector((state) => state.result);
  const cat13 = isresult.cat13;
  return <RecommendationsImplication cat={cat13} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions14 = () => {
  const isresult = useSelector((state) => state.result);
  const cat14 = isresult.cat14;
  return <RecommendationsImplication cat={cat14} r1="" r2="" r3="" r4="" r5="" />;
};
export const Suggestions15 = () => {
  const isresult = useSelector((state) => state.result);
  const cat15 = isresult.cat15;
  return <RecommendationsImplication cat={cat15} r1="" r2="" r3="" r4="" r5="" />;
};
export const SuggestionsAveragePercentage = () => {
  const isresult = useSelector((state) => state.result);
  const istotalAveragePercentage = isresult.totalAveragePercentage;
  return <RecommendationsImplication cat={istotalAveragePercentage} r1="" r2="" r3="" r4="" r5="" />;
};
