import Markdown from "react-markdown";

export default function Home() {
  return (
    <section
      style={{ padding: "2rem", background: "#18181b", height: "100dvh"}}
      id="__markdown_content__"
    >
      <Markdown
        children={
          '## fake-api\n\n```\nclone repo git clone git@github.com:Sanket-Gawande/fake-api.git\ncd fake-api\nyarn && yarn dev\n```\n#### Base Url\n```\nhttps://cute-tan-haddock-gown.cyclic.cloud\n```\n#### Search API\n/search?q=arijit singh\n```\narijit singh\nasha bhosale\n```\n\n#### Song Categories\n/category\n```\n"Pop",\n"Rock",\n"Hip-Hop",\n"R&B",\n"India",\n"Electronic",\n"90s Hindi",\n"Jazz"\n```\n\n#### Song by Category API\n/category/:category\n'
        }
      ></Markdown>
    </section>
  );
}
