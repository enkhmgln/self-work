import Link from "next/link";

const MenuItem = (props) => {
  return (
    <Link href={props.url} className="
    my-3 md:my-0 px-4 py-2">
        {props.text}

    </Link>
  );
};

export default MenuItem;
