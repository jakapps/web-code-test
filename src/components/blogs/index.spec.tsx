import { screen, render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { GET_BLOGS, Blogs } from ".";

const blogs = [
  {
    "title": "Quis Mattis Leo",
    "preface": "Vivamus ultricies, sem id egestas pulvinar, dui dolor bibendum risus, ac tempor augue ante quis ligula.",
    "body": "Suspendisse quis mattis leo. Proin id est a diam tincidunt commodo. Maecenas non tellus vel ipsum sollicitudin efficitur a consequat ante. Vivamus ultricies, sem id egestas pulvinar, dui dolor bibendum risus, ac tempor augue ante quis ligula.\n\nCras nec velit non erat varius sodales ut et neque. Nulla sed malesuada tellus. Ut quis scelerisque dui. Ut fringilla libero quis mauris convallis, quis tristique elit mattis. Praesent pharetra nibh metus, ut dapibus ante volutpat aliquet.",
    "sys": { id: "1" }
  },
  {
    "title": "Lorem Ipsum",
    "preface": "Nulla vel euismod ipsum, venenatis dapibus arcu. Quisque elementum scelerisque dolor, sed gravida nulla posuere id. Sed tempus convallis ex a laoreet.",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra ultrices luctus. Donec justo justo, porttitor nec posuere vitae, auctor a ligula. Vestibulum vel enim ac eros fermentum elementum sit amet id lorem. Nullam lorem nisi, ornare nec eleifend sed, porta sit amet nunc.\n\nUt maximus magna nec auctor bibendum. Donec id odio sapien. Suspendisse scelerisque ligula erat, a auctor leo varius vitae. Maecenas tempor leo vel magna ultricies scelerisque. Nulla vel euismod ipsum, venenatis dapibus arcu. Quisque elementum scelerisque dolor, sed gravida nulla posuere id. Sed tempus convallis ex a laoreet.\n\nNulla luctus ultrices elit, non luctus purus. Vivamus tempor, felis sed tempor laoreet, tellus dui cursus justo, nec cursus tortor turpis et purus. Nam lobortis mi congue nulla efficitur, nec pretium neque porta.",
    "sys": { id: "2" }
  },
  {
    "title": "Aliquam Laoreet",
    "preface": "Aenean sit amet aliquam erat. Vestibulum tincidunt velit sed dolor vulputate, ac viverra eros malesuada. Morbi malesuada libero odio, et imperdiet urna feugiat viverra.",
    "body": "Aliquam laoreet semper ultrices. Sed finibus eget libero ac suscipit. Ut luctus lacus arcu, at sollicitudin eros porttitor at. Phasellus porttitor justo eget rutrum congue. Donec venenatis euismod urna, sed vehicula mauris pellentesque sed. Suspendisse potenti.\n\nPellentesque ut dui arcu. Nullam iaculis sem tortor. Integer justo ex, tristique quis augue ac, dapibus scelerisque sem. Aenean sit amet aliquam erat. Vestibulum tincidunt velit sed dolor vulputate, ac viverra eros malesuada. Morbi malesuada libero odio, et imperdiet urna feugiat viverra.\n\nSed facilisis gravida luctus. Morbi varius, purus vel mattis placerat, eros nunc dapibus lorem, et efficitur justo eros vitae quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus luctus vitae quam eu porttitor.",
    "sys": { id: "3" }
  },
  {
    "title": "Nunc Tempor Tristique",
    "preface": "Pellentesque id feugiat ligula, eget pretium leo. Aenean nec nisl vitae nulla eleifend interdum. Nam venenatis urna quis consectetur volutpat.",
    "body": "Nunc tempor tristique elit sit amet tristique. Maecenas non turpis convallis, ornare eros sed, lobortis felis. Fusce pellentesque eros id tempor vestibulum. Suspendisse tellus magna, porta ac ex vitae, varius laoreet tortor. Sed eget risus ex. Ut in leo orci. Nam tempor interdum libero iaculis aliquam.\n\nNam ligula lorem, eleifend ac pellentesque id, pulvinar at lorem. Vivamus imperdiet velit massa, id porttitor eros accumsan quis. Pellentesque id feugiat ligula, eget pretium leo. Aenean nec nisl vitae nulla eleifend interdum. Nam venenatis urna quis consectetur volutpat.\n\nVestibulum porttitor, justo euismod molestie gravida, risus nunc tempor ex, quis hendrerit mauris nisi sit amet turpis. Aliquam rhoncus sed justo et posuere.",
    "sys": { id: "4" }
  },
  {
    "title": "Morbi Pharetra Commodo ASuctor",
    "preface": "Duis ipsum sapien, fringilla sit amet ipsum ut, fringilla commodo urna. Sed et cursus lorem.",
    "body": "Morbi pharetra commodo auctor. Aenean interdum, ligula ac tincidunt volutpat, ipsum odio suscipit est, vel feugiat mi ligula quis sem. Pellentesque malesuada quam nec felis efficitur vestibulum. Integer facilisis justo et eros ultrices, porttitor bibendum sem scelerisque. Duis ipsum sapien, fringilla sit amet ipsum ut, fringilla commodo urna. Sed et cursus lorem.\n\nIn tincidunt, est vel imperdiet accumsan, lorem turpis pulvinar velit, eget gravida sapien nibh ac urna. Nullam ut orci in magna cursus consequat.",
    "sys": { id: "5" }
  },
  {
    "title": "Vestibulum Pulvinar Leo Vel Venenatis Aliquam",
    "preface": "Maecenas sem felis, varius at fermentum sit amet, pulvinar vitae leo. Ut velit dui, ultrices nec est eu, imperdiet convallis augue.",
    "body": "Vestibulum pulvinar leo vel venenatis aliquam. Nunc auctor nec odio ut laoreet. Maecenas tincidunt neque fermentum ultricies interdum. Nullam vitae ultricies dui, sit amet gravida nulla. Integer porttitor vitae libero vel venenatis. Sed quis sapien consequat, egestas velit pharetra, tempor tellus. Sed elit justo, sagittis id lorem quis, gravida luctus neque. In bibendum in dolor vitae faucibus. Sed in ex nisi.\n\nMaecenas sem felis, varius at fermentum sit amet, pulvinar vitae leo. Ut velit dui, ultrices nec est eu, imperdiet convallis augue. Curabitur posuere fermentum orci id cursus. In in auctor enim, id finibus diam. Vestibulum ultrices id sapien vitae semper. Nullam vitae tempus diam. Proin consectetur leo id risus vestibulum gravida.",
    "sys": { id: "6" }
  },
  {
    "title": "Aenean Varius Elit",
    "preface": "In fermentum mauris leo, non tincidunt odio aliquam eget. In molestie tempus sem, eu lobortis enim dapibus eu.",
    "body": "Aenean varius elit tempor finibus consectetur. Curabitur fringilla ex vel leo tristique, sed faucibus arcu consectetur. Maecenas vitae viverra leo, vel luctus libero. Suspendisse at velit neque. Sed pellentesque, massa eu luctus ullamcorper, tortor enim mattis nulla, a viverra lectus elit sit amet neque. Aenean mattis auctor lacus, eget imperdiet neque porttitor ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. In fermentum mauris leo, non tincidunt odio aliquam eget. In molestie tempus sem, eu lobortis enim dapibus eu.\n\nPraesent sit amet tristique nulla. Cras at turpis ut elit molestie commodo. Mauris mollis dignissim odio, nec maximus tortor maximus et. Suspendisse lacus felis, gravida non eros vitae, facilisis egestas nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam tincidunt magna tellus, vel commodo lacus scelerisque eget.",
    "sys": { id: "7" }
  },
  {
    "title": "Donec Vitae Varius Dolor",
    "preface": "Aliquam malesuada nibh purus, sed ullamcorper libero lobortis eget. Pellentesque euismod mauris id tincidunt lacinia. In hac habitasse platea dictumst.",
    "body": "Donec vitae varius dolor. Cras velit nisi, ultricies et augue nec, cursus finibus nisi. In at ligula tempus, commodo ipsum ac, placerat odio. Vivamus quis ipsum a nibh mattis imperdiet. Donec semper augue erat, non rhoncus lacus tincidunt vitae. Aliquam malesuada nibh purus, sed ullamcorper libero lobortis eget. Pellentesque euismod mauris id tincidunt lacinia. In hac habitasse platea dictumst.\n\nSuspendisse potenti. Pellentesque a sollicitudin diam. Praesent accumsan dui eu magna commodo, placerat vehicula justo sollicitudin. Integer tempor vehicula velit, sed varius dui lacinia eu. Cras non sapien accumsan, semper turpis quis, congue orci.\n\nPellentesque justo orci, mollis accumsan urna quis, egestas convallis metus. Aliquam et mi ultrices, pulvinar quam eget, sagittis neque. Morbi dapibus lorem scelerisque, tincidunt dui et, finibus enim.",
    "sys": { id: "8" }
  },
  {
    "title": "Morbi Eget",
    "preface": "Ut non dui eu libero eleifend sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "body": "Morbi eget vestibulum metus. Praesent quis bibendum sapien. Etiam mattis at nibh sit amet iaculis. Etiam et erat libero. Vivamus cursus dui enim, nec fermentum quam cursus lobortis. Ut non dui eu libero eleifend sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nNunc eget est tincidunt, dignissim elit at, congue eros. Duis dictum dui non tellus egestas, id eleifend ante tristique. Fusce vestibulum euismod felis vitae iaculis. Curabitur elit ipsum, commodo ac iaculis faucibus, eleifend eget dui. Nulla sodales condimentum tellus, a pretium odio pellentesque sit amet. Nunc rutrum velit viverra justo placerat posuere.",
    "sys": { id: "9" }
  },
  {
    "title": "Praesent Molestie",
    "preface": "Morbi vitae eros sit amet elit tristique laoreet etiam vitae diam.",
    "body": "Phasellus id quam urna. Suspendisse aliquam leo urna, id accumsan orci cursus sollicitudin. Suspendisse potenti. In maximus viverra augue non varius. Nam imperdiet, est sed elementum fringilla, nisi tellus mollis diam, nec iaculis elit enim elementum arcu. Fusce ut mauris id ex ullamcorper mollis sed sed est. Nulla in risus ullamcorper, dapibus urna in, accumsan neque. In est nibh, egestas tristique nunc id, aliquet sagittis arcu. Proin congue sem scelerisque nisi semper gravida. Morbi vitae eros sit amet elit tristique laoreet. Etiam vitae diam vulputate est sodales pretium vitae ut ligula. Integer vitae justo fermentum, interdum sapien et, commodo magna.",
    "sys": { id: "10" }
  }
];

const mocks = [
  {
    request: {
      query: GET_BLOGS,
      variables: { limit: 10 }
    },
    result: {
      data: {
        "blogPostCollection": {
          "items": blogs
        }
      }
    }
  },
  {
    request: {
      query: GET_BLOGS,
      variables: { limit: 4 }
    },
    result: {
      data: {
        "blogPostCollection": {
          "items": blogs.slice(0, 4)
        }
      }
    }
  },
  {
    request: {
      query: GET_BLOGS,
      variables: { limit: 7 }
    },
    error: new Error('An error occurred')
  }
];


describe('Blogs', () => {

  it('will query and render blogs', async () => {

    render((
      <MockedProvider mocks={mocks}>
        <Blogs />
      </MockedProvider>
    ));

    await waitFor(() => {

      const blog1 = screen.queryByText('Quis Mattis Leo');
      const blog2 = screen.queryByText('Aliquam Laoreet');

      expect(blog1).toBeInTheDocument();
      expect(blog2).toBeInTheDocument();
    });
  });

  it('will render correct number of blogs', async () => {

    render((
      <MockedProvider mocks={mocks}>
        <Blogs limit={4} />
      </MockedProvider>
    ));

    await waitFor(() => {

      const blogs = [
        screen.queryByText('Quis Mattis Leo'),
        screen.queryByText('Lorem Ipsum'),
        screen.queryByText('Aliquam Laoreet'),
        screen.queryByText("Nunc Tempor Tristique"),
        screen.queryByText("Morbi Pharetra Commodo ASuctor"),
        screen.queryByText("Vestibulum Pulvinar Leo Vel Venenatis Aliquam"),
        screen.queryByText("Aenean Varius Elit"),
        screen.queryByText("Donec Vitae Varius Dolor"),
        screen.queryByText("Praesent Molestie"),
        screen.queryByText("Morbi Eget")
      ];

      expect(blogs[0]).toBeInTheDocument();
      expect(blogs[1]).toBeInTheDocument();
      expect(blogs[2]).toBeInTheDocument();
      expect(blogs[3]).toBeInTheDocument();

      expect(blogs[4]).not.toBeInTheDocument();
      expect(blogs[5]).not.toBeInTheDocument();
      expect(blogs[6]).not.toBeInTheDocument();
      expect(blogs[7]).not.toBeInTheDocument();
      expect(blogs[8]).not.toBeInTheDocument();
      expect(blogs[9]).not.toBeInTheDocument();
    });
  });

  it('will render a loading message', async () => {

     render((
      <MockedProvider mocks={mocks}>
        <Blogs />
      </MockedProvider>
    ));

    let loading = screen.queryByText("Loading...");
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      let loading = screen.queryByText("Loading...");
      expect(loading).not.toBeInTheDocument();
    });
  });

  it('will handle errors', async () => {

     render((
      <MockedProvider mocks={mocks}>
        <Blogs limit={7} />
      </MockedProvider>
    ));

    await waitFor(() => {
      const blog1 = screen.queryByText('Quis Mattis Leo');
      expect(blog1).not.toBeInTheDocument();
  
      const error = screen.getByText('Something went wrong');
      expect(error).toBeInTheDocument();
    });
  });
});