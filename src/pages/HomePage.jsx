import Heading from "../components/atoms/Heading"

export const HomePage = () => {
    return (
        <div className="mx-10 my-3">
            <Heading level={1} size="big" color="secondary">Hello World</Heading>
            <Heading level={1} size="medium" color="secondary">Hello World</Heading>
            <Heading level={4   } size="smallbold" color="secondary">Hello World</Heading>
            <Heading level={4} size="smallsemibold" color="secondary">Hello World</Heading>
        </div>
    )
}