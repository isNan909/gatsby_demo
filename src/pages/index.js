import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";


const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <div className='home'>
      <h1>Hello Ishan</h1>
      <p>Welcome your awesome Blog</p>
      <div>
        <div
          style={{
            maxWidth: `340px`,
            margin: '0 auto',
          }}
        >
          <Image />
        </div>
      </div>
      <Link to='/siteposts/'>View all posts</Link>
    </div>
  </Layout>
);

export default IndexPage;