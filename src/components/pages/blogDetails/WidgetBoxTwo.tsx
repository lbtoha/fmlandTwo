import Link from "next/link";

const WidgetBoxTwo = () => {
  return (
    <div className="widget-box style-two">
      <h4 className="widget-box-title">Tag</h4>

      <ul className="tag-list">
        <li>
          <Link href="#0">Music</Link>
        </li>
        <li>
          <Link href="#0">Podcast</Link>
        </li>
        <li>
          <Link href="#0">Live show</Link>
        </li>
        <li>
          <Link href="#0">Artist</Link>
        </li>
        <li>
          <Link href="#0">Radio</Link>
        </li>
        <li>
          <Link href="#0">RJ</Link>
        </li>
      </ul>
    </div>
    //   widget-box end
  );
};

export default WidgetBoxTwo;
