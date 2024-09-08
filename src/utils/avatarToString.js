export function avatarToString(name, bgcolor = "primary.main") {
  const array = name.split(" ");

  return {
    sx: {
      bgcolor,
    },
    children:
      array.length === 1
        ? name[0]
        : `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
