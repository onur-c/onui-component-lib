"use client";
import { buttonString } from "@/constants/components-strings";
import {
  ComponentInfo,
  ComponentInfoCode,
  ComponentInfoDescription,
  ComponentInfoHeader,
  ComponentInfoShowcase,
} from "./ComponentInfo";
import Button from "./ui/Button";

const MainContent = () => {
  return (
    <section className="bg-white/25 shadow-xl px-8 py-4 rounded-lg border-black/10">
      <ComponentInfo>
        <ComponentInfoHeader>Button </ComponentInfoHeader>
        <ComponentInfoDescription>
          This is a customizable button with multiple colors.
        </ComponentInfoDescription>
        <ComponentInfoShowcase>
          <div className="space-y-2">
            <h2 className="text-xs text-white w-full border-b border-b-white/20">
              Small
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button size={"small"} variant="ghost">
                Ghost Button
              </Button>
              <Button size={"small"} variant="black">
                Black Button
              </Button>
              <Button size={"small"} variant="white">
                White Button
              </Button>
              <Button size={"small"} variant="red">
                Red Button
              </Button>
              <Button size={"small"} variant="green">
                Green Button
              </Button>
              <Button size={"small"} variant="blue">
                Blue Button
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-xs text-white w-full border-b border-b-white/20">
              Medium
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button size={"medium"} variant="ghost">
                Ghost Button
              </Button>
              <Button size={"medium"} variant="black">
                Black Button
              </Button>
              <Button size={"medium"} variant="white">
                White Button
              </Button>
              <Button size={"medium"} variant="red">
                Red Button
              </Button>
              <Button size={"medium"} variant="green">
                Green Button
              </Button>
              <Button size={"medium"} variant="blue">
                Blue Button
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-xs text-white w-full border-b border-b-white/20">
              Large
            </h2>
            <div className="flex flex-wrap gap-2">
              <Button size={"large"} variant="ghost">
                Ghost Button
              </Button>
              <Button size={"large"} variant="black">
                Black Button
              </Button>
              <Button size={"large"} variant="white">
                White Button
              </Button>
              <Button size={"large"} variant="red">
                Red Button
              </Button>
              <Button size={"large"} variant="green">
                Green Button
              </Button>
              <Button size={"large"} variant="blue">
                Blue Button
              </Button>
            </div>
          </div>
        </ComponentInfoShowcase>
        <ComponentInfoCode>{buttonString}</ComponentInfoCode>
      </ComponentInfo>
      <ComponentInfo />
      <ComponentInfo />
      <ComponentInfo />
    </section>
  );
};

export default MainContent;
