import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Size Variations</h2>
                <div className="flex gap-4">
                    <Button title="Small" sizes="small" />
                    <Button title="Medium" sizes="medium" />
                    <Button title="Large" sizes="large" />
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Shape Variations</h2>
                <div className="flex gap-4">
                    <Button title="Rounded Small" shapes="rounded-sm" />
                    <Button title="Rounded Medium" shapes="rounded-md" />
                    <Button title="Rounded Full" shapes="rounded-full" />
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Styled Variations</h2>
                <div className="flex gap-4">
                    <Button
                        title="Red Button"
                        styles="bg-red-500 hover:bg-red-600"
                    />
                    <Button
                        title="Green Button"
                        styles="bg-green-500 hover:bg-green-600"
                    />
                    <Button
                        title="Purple Button"
                        styles="bg-purple-500 hover:bg-purple-600"
                    />
                </div>
            </div>
            )
}
            export default Landing