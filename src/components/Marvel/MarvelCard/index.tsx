import { Box, Typography, Paper, List, ListItem } from "@mui/material";

export type Result = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
};

export default function MarvelCard({
  name,
  description,
  thumbnail,
  id,
  comics,
}: Result) {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        gap={1}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="45%"
        >
          <Typography>{name}</Typography>
          <img
            style={{ width: "150px", margin: "5px" }}
            src={thumbnail.path + "." + thumbnail.extension}
            alt={name}
          />
          <Typography variant="body2" color="initial">
            {description}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          width="55%"
        >
          <Typography variant="h6">Comics</Typography>
          <Paper
            elevation={0}
            style={{
              maxHeight: 400,
              overflow: "auto",
              width: "100%",
              backgroundColor: "inherit",
            }}
          >
            <List>
              {comics.items.map((item, index) => {
                return (
                  <ListItem key={index}>
                    {index + 1}- {item.name}
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
