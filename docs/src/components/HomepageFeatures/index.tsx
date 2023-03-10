import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Easy to Use",
        Svg: require("@site/static/img/illustration1.svg").default,
        description: (
            <>
                Install and start using intuitive and self-explanatory methods.
                In addition to good documentation
            </>
        ),
    },
    {
        title: "Save time",
        Svg: require("@site/static/img/illustration2.svg").default,
        description: (
            <>
                Save time trying to manipulate and format dates and focus on
                what is required for the project.
            </>
        ),
    },
    {
        title: "Lightweight",
        Svg: require("@site/static/img/illustration3.svg").default,
        description: (
            <>
                Lightweight library and zero dependencies. With simple and
                functional methods. Besides being quick.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
