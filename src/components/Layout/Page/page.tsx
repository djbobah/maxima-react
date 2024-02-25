import * as React from "react";
import "./page.scss";
import { useParams } from "react-router";
import ExectlyComponent from "src/components/ExectlyComponent/exectlyComponent";
import pageData from "../../../assets/data/pagesData.json";

import { randNumber } from "../../../utils/functions";

const Page = () => {
  const { name } = useParams();
  const filteredData = pageData.filter((item) => item.title.includes(name));

  console.log(filteredData);
  const pic = randNumber(4, 1);
  return (
    <div>
      <div className="page container">
        <div className="promo__textBlock">
          <h1 className="promo__title">
            Ed Space
            <br />
            {name}
          </h1>
          <p
            className="promo__description"
            dangerouslySetInnerHTML={{ __html: filteredData[0].desc }}
          />
        </div>
        <div>
          <img
            className="promo__img"
            src={`/assets/img/teach${pic}.png`}
            alt="PromoImg"
          />
        </div>
      </div>
      <div className="add">
        <ExectlyComponent />
      </div>
    </div>
  );
};

export default Page;
