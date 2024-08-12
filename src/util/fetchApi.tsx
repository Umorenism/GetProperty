// const BASE_URL = "";
// export const reuest = async (
//   url,
//   method,
//   headers = {},
//   body = {},
//   isNotStringified = false
// ) => {
//   let res;
//   let data;
//   c;
//   switch (method) {
//     case "GET":
//       res = await fetch(BASE_URL + url, { headers });
//       data = await res.json();
//       return data;

//     case "POST":
//       if (isNotStringified) {
//         res = await fetch(BASE_URL + url, { headers, method, body });
//         data = await res.json();
//       } else {
//         res = await fetch(BASE_URL + url, {
//           headers,
//           method,
//           body: JSON.stringify({ ...body }),
//         });
//       }
//       return data;

//     case "PUT":
//       res = await fetch(BASE_URL + url, { headers, method, body });
//       data = await res.json();
//       return data;

//     case "DELETE":
//       res = await fetch(BASE_URL + url, { headers, method });
//       data = await res.json();
//       return data;
//     default:
//       return;
//   }
// };
