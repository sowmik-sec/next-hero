import Link from "next/link";

function AboutContent() {
  return (
    <div>
      <Link href={"/about/history"}>History</Link>
      <Link href={"/about/mission"}>Mission</Link>
    </div>
  );
}

export default AboutContent;
