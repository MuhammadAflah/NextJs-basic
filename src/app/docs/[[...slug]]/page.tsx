//the use of [...slug] is used to define catch all segment. which means by using this we can achive multiple routes from a page.
//adding [[...slug]] inside two square bracket means without two square brackets when we search for route docs it will shows a 404 error page, but when using the two brackets it shows the default value of docs page. here the default value is return <h1>docs home page</h1>;

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing docs of {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>viewing docs of {params.slug[0]}</h1>;
  }
  return <h1>docs home page</h1>;
}
