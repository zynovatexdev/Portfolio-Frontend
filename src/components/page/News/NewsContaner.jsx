import React from "react";
import {
  NewsBody,
  StyledLink,
  NewsLeft,
  Vline2,
  Dropdown,
  Read,
  ReadIcon,
  Vline,
  NewsRight,
  Newsnum,
  NewsTopic,
  NewsDate,
  Categories,
} from "../../../styles/pages/news";
const year = [
  {
    key: 1,
    year: 2017,
  },
  {
    key: 2,
    year: 2018,
  },
  {
    key: 3,
    year: 2019,
  },
  {
    key: 4,
    year: 2020,
  },
  {
    key: 5,
    year: 2021,
  },
  {
    key: 6,
    year: 2022,
  },
  {
    key: 7,
    year: 2023,
  },
];
const newsHead = [
  {
    key: 1,
    newsTopic: "ZYNOVATEX announces new product launch",
    date: "Dec 15, 2022",
    more: "",
  },
  {
    key: 2,
    newsTopic:
      "Startup innovator ZYNOVATEX unveils groundbreaking E-commerce solution",
    date: "Dec 15, 2022",
  },
  {
    key: 3,
    newsTopic:
      "ZYNOVATEX announces new product launch ZYNOVATEX announces new product launch",
    date: "Dec 15, 2022",
  },
  {
    key: 4,
    newsTopic: "ZYNOVATEX announces new product launch ",
    date: "Dec 15, 2022",
  },
  {
    key: 5,
    newsTopic:
      "ZYNOVATEX announces new product launch ZYNOVATEX announces new product launch ",
    date: "Dec 15, 2022",
  },
  {
    key: 6,
    newsTopic: "Exploring boundaries: ZYNOVATEX hosts successful tech summit",
    date: "Dec 15, 2022",
  },
];

const NewsContaner = () => {
  return (
    <NewsBody>
      <NewsLeft>
        <h3>Filter by</h3>
        <ul>
          <Categories>categories</Categories>

          <ul>
            <li>
              <input type="checkbox" />
              Product Updates
            </li>
            <li>
              <input type="checkbox" />
              Company Events
            </li>
            <li>
              <input type="checkbox" />
              Industry News
            </li>
            <li>
              <input type="checkbox" />
              Market Insights
            </li>
            <li>
              <input type="checkbox" />
              Innovations and Advancements
            </li>
          </ul>
        </ul>
        <Vline />
        <Categories>Date</Categories>
        <ul>
          <ul>
            <li>
              <input type="checkbox" />
              Last 7 days
            </li>
            <li>
              <input type="checkbox" />
              Last 30 days
            </li>
            <li>
              <input type="checkbox" />
              Industry News
            </li>
            <li>
              <input type="checkbox" />
              Last year
            </li>
          </ul>
        </ul>
        <Vline />
        <h3>News Archive</h3>
        <Dropdown>
          <select>
            <option selected>select year</option>
            {year.map((year) => (
              <option value={year.year}>{year.year}</option>
            ))}
          </select>
        </Dropdown>
      </NewsLeft>
      <NewsRight>
        {newsHead.map((newsHead) => (
          <Newsnum key={newsHead.key}>
            <NewsTopic>{newsHead.newsTopic}</NewsTopic>
            <NewsDate>{newsHead.date}</NewsDate>
            <Read>
              <StyledLink to="/newsread">News Read</StyledLink>
              <ReadIcon />
            </Read>
            <Vline2 />
          </Newsnum>
        ))}
      </NewsRight>
    </NewsBody>
  );
};

export default NewsContaner;
