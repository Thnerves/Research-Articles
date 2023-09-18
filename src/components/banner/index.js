import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/banner.jpg" />
      <BannerContent>
        <Typography variant="h6">Collections of Papers..</Typography>
        <BannerTitle variant="h2">
        शोध पत्र and ArTicleS
        </BannerTitle>

        <BannerDescription variant="subtitle">
        When reading a research paper or article, it's important to focus on key points that will
         help you understand the purpose and significance of the research.
        </BannerDescription>

        <BannerShopButton color="primary">Click here to Explore </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
