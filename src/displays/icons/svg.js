/**
 * The bounding boxes are precalculated by running BboxFinder.html
 */
glift.displays.icons.svg = {
   // http://raphaeljs.com/icons/#cross
  cross: {
    string: "M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z",
    bbox: {
      "x":8.116,
      "y":7.585,
      "x2":24.778,
      "y2":24.248,
      "width":16.662,
      "height":16.663
    }
  },

  // http://raphaeljs.com/icons/#check
  check: {
    string: "M2.379,14.729 5.208,11.899 12.958,19.648 25.877,6.733 28.707,9.561 12.958,25.308z",
    bbox: {
      "x":2.379,
      "y":6.733,
      "x2":28.707,
      "y2":25.308,
      "width":26.328,
      "height":18.575
    }
  },

  // http://raphaeljs.com/icons/#refresh
  refresh: {
    string: "M24.083,15.5c-0.009,4.739-3.844,8.574-8.583,8.583c-4.741-0.009-8.577-3.844-8.585-8.583c0.008-4.741,3.844-8.577,8.585-8.585c1.913,0,3.665,0.629,5.09,1.686l-1.782,1.783l8.429,2.256l-2.26-8.427l-1.89,1.89c-2.072-1.677-4.717-2.688-7.587-2.688C8.826,3.418,3.418,8.826,3.416,15.5C3.418,22.175,8.826,27.583,15.5,27.583S27.583,22.175,27.583,15.5H24.083z",
    bbox: {
      "x":3.416,
      "y":3.415,
      "x2":27.583,
      "y2":27.583,
      "width":24.167,
      "height":24.168
    }
  },

  // http://raphaeljs.com/icons/#undo
  undo: {
    string: "M12.981,9.073V6.817l-12.106,6.99l12.106,6.99v-2.422c3.285-0.002,9.052,0.28,9.052,2.269c0,2.78-6.023,4.263-6.023,4.263v2.132c0,0,13.53,0.463,13.53-9.823C29.54,9.134,17.952,8.831,12.981,9.073z",
    bbox: {"x":0.875,"y":6.817,"x2":29.54,"y2":27.042158,"width":28.665,"height":20.225158}
  },

  // http://raphaeljs.com/icons/#arrowright2
  'chevron-right': {
    string: "M10.129,22.186 16.316,15.999 10.129,9.812 13.665,6.276 23.389,15.999 13.665,25.725z",
    bbox: {
      "x":10.129,
      "y":6.276,
      "x2":23.389,
      "y2":25.725,
      "width":13.26,
      "height":19.449
    }
  },

  // http://raphaeljs.com/icons/#arrowleft2
  'chevron-left': {
    string: "M21.871,9.814 15.684,16.001 21.871,22.188 18.335,25.725 8.612,16.001 18.335,6.276z",
    bbox: { "x":8.612,"y":6.276,"x2":21.871,"y2":25.725,"width":13.259,"height":19.449
    }
  },

  // http://raphaeljs.com/icons/#smallgear
  'small-gear': {
    string: "M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z",
    bbox: {
      "x":0.667,"y":0.667,"x2":31.333,"y2":31.333,"width":30.666,"height":30.666
    }
  },

  // http://raphaeljs.com/icons/#talke
  'question-bubble': {
    string: "M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.982,21.375h-1.969v-1.889h1.969V21.375zM16.982,17.469v0.625h-1.969v-0.769c0-2.321,2.641-2.689,2.641-4.337c0-0.752-0.672-1.329-1.553-1.329c-0.912,0-1.713,0.672-1.713,0.672l-1.12-1.393c0,0,1.104-1.153,3.009-1.153c1.81,0,3.49,1.121,3.49,3.009C19.768,15.437,16.982,15.741,16.982,17.469z",
    bbox: {
      "x":2,"y":4.938,"x2":30,"y2":25.938,"width":28,"height":21
    }
  },

  // http://raphaeljs.com/icons/#roadmap
  roadmap: {
    string: "M23.188,3.735c0-0.975-0.789-1.766-1.766-1.766s-1.766,0.791-1.766,1.766s1.766,4.267,1.766,4.267S23.188,4.71,23.188,3.735zM20.578,3.734c0-0.466,0.378-0.843,0.844-0.843c0.467,0,0.844,0.377,0.844,0.844c0,0.466-0.377,0.843-0.844,0.843C20.956,4.578,20.578,4.201,20.578,3.734zM25.281,18.496c-0.562,0-1.098,0.046-1.592,0.122L11.1,13.976c0.199-0.181,0.312-0.38,0.312-0.59c0-0.108-0.033-0.213-0.088-0.315l8.41-2.239c0.459,0.137,1.023,0.221,1.646,0.221c1.521,0,2.75-0.485,2.75-1.083c0-0.599-1.229-1.083-2.75-1.083s-2.75,0.485-2.75,1.083c0,0.069,0.021,0.137,0.054,0.202L9.896,12.2c-0.633-0.188-1.411-0.303-2.265-0.303c-2.088,0-3.781,0.667-3.781,1.49c0,0.823,1.693,1.489,3.781,1.489c0.573,0,1.11-0.054,1.597-0.144l11.99,4.866c-0.19,0.192-0.306,0.401-0.306,0.623c0,0.188,0.096,0.363,0.236,0.532L8.695,25.415c-0.158-0.005-0.316-0.011-0.477-0.011c-3.241,0-5.87,1.037-5.87,2.312c0,1.276,2.629,2.312,5.87,2.312c3.241,0,5.87-1.034,5.87-2.312c0-0.22-0.083-0.432-0.229-0.633l10.265-5.214c0.37,0.04,0.753,0.066,1.155,0.066c2.414,0,4.371-0.771,4.371-1.723C29.65,19.268,27.693,18.496,25.281,18.496z",
    bbox: {
      "x":2.348,"y":1.969,"x2":29.65,"y2":30.028,"width":27.302,"height":28.059
    }
  },

  /////////////////////////////
  // Icons used for GameView //
  /////////////////////////////

  // http://raphaeljs.com/icons/#play
  play: {
    string: "m 58.250001,41.61219 0,40 34.69375,-20.03045 z",
    bbox:{"x":58.250001,"y":41.61219,"x2":92.94375099999999,"y2":81.61219,"width":34.693749999999994,"height":40}
  },

  // My own creation.  See themes/assets.
  unplay: {
    string: "m 74.987245,22.583592 0,39.978487 L 40,42.362183 z",
    bbox: {"x":40,"y":22.583592,"x2":74.987245,"y2":62.562079,"width":34.987245,"height":39.978487}
  },

  // http://raphaeljs.com/icons/#end
  end: {
    string: "M21.167,5.5,21.167,13.681,6.684,5.318,6.684,25.682,21.167,17.318,21.167,25.5,25.5,25.5,25.5,5.5z",
    bbox: {"x":6.684,"y":5.318,"x2":25.5,"y2":25.682,"width":18.816,"height":20.364}
  },

  // http://raphaeljs.com/icons/#start
  start: {
    string: "M24.316,5.318,9.833,13.682,9.833,5.5,5.5,5.5,5.5,25.5,9.833,25.5,9.833,17.318,24.316,25.682z",
    bbox: {"x":5.5,"y":5.318,"x2":24.316,"y2":25.682,"width":18.816,"height":20.364}
  },

  // http://raphaeljs.com/icons/#arrowup
  arrowup: {
    string: "M23.963,20.834L17.5,9.64c-0.825-1.429-2.175-1.429-3,0L8.037,20.834c-0.825,1.429-0.15,2.598,1.5,2.598h12.926C24.113,23.432,24.788,22.263,23.963,20.834z",
    bbox: {"x":7.684895,"y":8.56825,"x2":24.315105,"y2":23.432,"width":16.630209,"height":14.86375}
  },

  // http://raphaeljs.com/icons/#arrowright
  arrowright: {
    string: "M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z",
    bbox: {"x":8.568,"y":7.684457,"x2":23.4315,"y2":24.315543,"width":14.8635,"height":16.631086}
  },

  // http://raphaeljs.com/icons/#arrowleft
  arrowleft: {
    string: "M20.834,8.037L9.641,14.5c-1.43,0.824-1.43,2.175,0,3l11.193,6.463c1.429,0.826,2.598,0.15,2.598-1.5V9.537C23.432,7.887,22.263,7.211,20.834,8.037z",
    bbox: {"x":8.5685,"y":7.684457,"x2":23.432,"y2":24.315543,"width":14.8635,"height":16.631086}
  },

  // http://raphaeljs.com/icons/#detour
  detour: {
    string: "M29.342,15.5l-7.556-4.363v2.614H18.75c-1.441-0.004-2.423,1.002-2.875,1.784c-0.735,1.222-1.056,2.561-1.441,3.522c-0.135,0.361-0.278,0.655-0.376,0.817c-1.626,0-0.998,0-2.768,0c-0.213-0.398-0.571-1.557-0.923-2.692c-0.237-0.676-0.5-1.381-1.013-2.071C8.878,14.43,7.89,13.726,6.75,13.75H2.812v3.499c0,0,0.358,0,1.031,0h2.741c0.008,0.013,0.018,0.028,0.029,0.046c0.291,0.401,0.634,1.663,1.031,2.888c0.218,0.623,0.455,1.262,0.92,1.897c0.417,0.614,1.319,1.293,2.383,1.293H11c2.25,0,1.249,0,3.374,0c0.696,0.01,1.371-0.286,1.809-0.657c1.439-1.338,1.608-2.886,2.13-4.127c0.218-0.608,0.453-1.115,0.605-1.314c0.006-0.01,0.012-0.018,0.018-0.025h2.85v2.614L29.342,15.5zM10.173,14.539c0.568,0.76,0.874,1.559,1.137,2.311c0.04,0.128,0.082,0.264,0.125,0.399h2.58c0.246-0.697,0.553-1.479,1.005-2.228c0.252-0.438,0.621-0.887,1.08-1.272H9.43C9.735,14.003,9.99,14.277,10.173,14.539z",
    bbox: {"x":2.812,"y":11.137,"x2":29.342,"y2":23.37325,"width":26.53,"height":12.23625}
  },

  checkbox: {
    string: "M26,27.5H6c-0.829,0-1.5-0.672-1.5-1.5V6c0-0.829,0.671-1.5,1.5-1.5h20c0.828,0,1.5,0.671,1.5,1.5v20C27.5,26.828,26.828,27.5,26,27.5zM7.5,24.5h17v-17h-17V24.5z",
    bbox: {"x":4.5,"y":4.5,"x2":27.5,"y2":27.5,"width":23,"height":23}
  },

  edit: {
    string: "M27.87,7.863L23.024,4.82l-7.889,12.566l4.842,3.04L27.87,7.863zM14.395,21.25l-0.107,2.855l2.527-1.337l2.349-1.24l-4.672-2.936L14.395,21.25zM29.163,3.239l-2.532-1.591c-0.638-0.401-1.479-0.208-1.882,0.43l-0.998,1.588l4.842,3.042l0.999-1.586C29.992,4.481,29.802,3.639,29.163,3.239zM25.198,27.062c0,0.275-0.225,0.5-0.5,0.5h-19c-0.276,0-0.5-0.225-0.5-0.5v-19c0-0.276,0.224-0.5,0.5-0.5h13.244l1.884-3H5.698c-1.93,0-3.5,1.57-3.5,3.5v19c0,1.93,1.57,3.5,3.5,3.5h19c1.93,0,3.5-1.57,3.5-3.5V11.097l-3,4.776V27.062z",
    bbox: {"x":2.198,"y":1.4388,"x2":29.80125,"y2":30.562,"width":27.60325,"height":29.12316}
  },

  // http://raphaeljs.com/icons/#ff
  ff: {
    string: "M25.5,15.5,15.2,9.552,15.2,15.153,5.5,9.552,5.5,21.447,15.2,15.847,15.2,21.447z",
    bbox: {}
  },

  // http://raphaeljs.com/icons/#rw
  rw: {
    string: "M5.5,15.499,15.8,21.447,15.8,15.846,25.5,21.447,25.5,9.552,15.8,15.152,15.8,9.552z",
    bbox: {}
  },

  ///////////////////////////////
  // Icons used for GameEditor //
  ///////////////////////////////

  // My own creation.  For layered icons (multi-icons).
  multiopen: {
    string: "m 130,73.862183 6.5,-13 6.5,13 z M 70.709141,37.871643 c -5.658849,0 -10.21875,4.412745 -10.21875,9.90625 l 0,43.3125 c 0,5.493505 4.559901,9.906247 10.21875,9.906247 l 44.624999,0 c 5.65885,0 10.21875,-4.412742 10.21875,-9.906247 l 0,-43.3125 c 0,-5.493505 -4.5599,-9.90625 -10.21875,-9.90625 l -44.624999,0 z m 2.0625,3.125 40.468749,0 c 5.12994,0 9.25,3.959703 9.25,8.90625 l 0,39 c 0,4.946547 -4.12006,8.9375 -9.25,8.9375 l -40.468749,0 c -5.129943,0 -9.25,-3.990953 -9.25,-8.9375 l 0,-39 c 0,-4.946547 4.120057,-8.90625 9.25,-8.90625 z",
    bbox: {"x":60.490391,"y":37.871643,"x2":143,"y2":100.99664,"width":82.509609,"height":63.124997},
    subboxName: 'multiopen-boxonly-inside'
  },

  // The above minus the arrow.
  "multiopen-boxonly": {
    string: "m 71.1875,38.25 c -5.658849,0 -10.21875,4.412745 -10.21875,9.90625 l 0,43.3125 c 0,5.493505 4.559901,9.90625 10.21875,9.90625 l 44.625,0 c 5.65885,0 10.21875,-4.412745 10.21875,-9.90625 l 0,-43.3125 c 0,-5.493505 -4.5599,-9.90625 -10.21875,-9.90625 l -44.625,0 z m 2.0625,3.125 40.46875,0 c 5.12994,0 9.25,3.959703 9.25,8.90625 l 0,39 c 0,4.946547 -4.12006,8.9375 -9.25,8.9375 l -40.46875,0 c -5.129943,0 -9.25,-3.990953 -9.25,-8.9375 l 0,-39 C 64,45.334703 68.120057,41.375 73.25,41.375 z",
    bbox: {"x":60.96875,"y":38.25,"x2":126.03125,"y2":101.375,"width":65.0625,"height":63.125},
    subboxName: 'multiopen-boxonly-inside'
  },

  // Used to indicate where the inside box lives, which is in turn used to
  // position icons with the box.
  "multiopen-boxonly-inside": {
    string: "m 73.259825,41.362183 40.445075,0 c 5.12994,0 9.25982,3.982238 9.25982,8.928785 l 0,38.999149 c 0,4.946547 -4.12988,8.928786 -9.25982,8.928786 l -40.445075,0 C 68.129882,98.218903 64,94.236664 64,89.290117 l 0,-38.999149 c 0,-4.946547 4.129882,-8.928785 9.259825,-8.928785 z",
    bbox: {"x":64,"y":41.362183,"x2":122.96472,"y2":98.218903,"width":58.96472,"height":56.85672}
  },

  ///////////////////////////////////////
  // Individual Icons the Board Editor //
  ///////////////////////////////////////

  // My own creation
  twostones: {
    string: "m 42.894737,29.335869 c 0,6.540213 -5.301891,11.842106 -11.842105,11.842106 -6.540214,0 -11.842105,-5.301893 -11.842105,-11.842106 0,-6.540214 5.301891,-11.842105 11.842105,-11.842105 6.540214,0 11.842105,5.301891 11.842105,11.842105 z M 31.052632,16.309553 c -7.194236,0 -13.026316,5.83208 -13.026316,13.026316 0,7.194233 5.83208,13.026314 13.026316,13.026314 3.733917,0 7.098575,-1.575815 9.473684,-4.092928 2.375029,2.516206 5.740532,4.092928 9.473684,4.092928 7.194235,0 13.026316,-5.832081 13.026316,-13.026314 0,-7.194236 -5.832081,-13.026316 -13.026316,-13.026316 -3.733152,0 -7.098655,1.56932 -9.473684,4.085526 -2.374906,-2.51483 -5.741698,-4.085526 -9.473684,-4.085526 z",
    bbox: {"x":18.026316,"y":16.309553,"x2":63.026316,"y2":42.362183,"width":45,"height":26.05263}
  },

  bstone: {
    string: "m 105.05587,69.988831 a 23.738585,23.738585 0 1 1 -47.477171,0 23.738585,23.738585 0 1 1 47.477171,0 z",
    bbox: {"x":57.578699,"y":46.2148296,"x2":105.05587,"y2":93.7628323,"width":47.477171,"height":47.548002735}
  },

  wstone: {
    string: "M 107.5 37.375 C 81.266474 37.375 60 58.641474 60 84.875 C 60 111.10853 81.266474 132.375 107.5 132.375 C 133.73353 132.375 155 111.10853 155 84.875 C 155 58.641474 133.73353 37.375 107.5 37.375 z M 107.5 42.375 C 130.9721 42.375 150 61.402898 150 84.875 C 150 108.3471 130.9721 127.375 107.5 127.375 C 84.027898 127.375 65 108.3471 65 84.875 C 65 61.402898 84.027898 42.375 107.5 42.375 z",
    bbox: {"x":60,"y":37.375,"x2":155,"y2":132.375,"width":95,"height":95}
  },

  bstone_a: {
    string: "M 107.5 37.375 C 81.266474 37.375 60 58.641474 60 84.875 C 60 111.10853 81.266474 132.375 107.5 132.375 C 133.73353 132.375 155 111.10853 155 84.875 C 155 58.641474 133.73353 37.375 107.5 37.375 z M 102.78125 52.53125 L 111.96875 52.53125 L 134.75 112.375 L 126.34375 112.375 L 120.90625 97 L 93.90625 97 L 88.46875 112.375 L 79.9375 112.375 L 102.78125 52.53125 z M 107.34375 60.5 L 96.375 90.28125 L 118.375 90.28125 L 107.34375 60.5 z",
    bbox: {"x":60,"y":37.375,"x2":155,"y2":132.375,"width":95,"height":95}
  },

  bstone_1: {
    string: "M 107.5 37.375 C 81.266474 37.375 60 58.641474 60 84.875 C 60 111.10853 81.266474 132.375 107.5 132.375 C 133.73353 132.375 155 111.10853 155 84.875 C 155 58.641474 133.73353 37.375 107.5 37.375 z M 103.46875 52.125 L 111.625 52.125 L 111.625 105.5 L 124.9375 105.5 L 124.9375 112.375 L 90.25 112.375 L 90.25 105.5 L 103.5625 105.5 L 103.5625 59.5625 L 89.0625 62.46875 L 89.0625 55.03125 L 103.46875 52.125 z",
    bbox: {"x":60,"y":37.375,"x2":155,"y2":132.375,"width":95,"height":95}
  },

  bstone_1_v2: {
    string: "M 107.5 37.375 C 81.266474 37.375 60 58.641474 60 84.875 C 60 111.10853 81.266474 132.375 107.5 132.375 C 133.73353 132.375 155 111.10853 155 84.875 C 155 58.641474 133.73353 37.375 107.5 37.375 z M 106.96875 52.4375 L 116.21875 52.4375 L 116.21875 112.21875 L 104.8125 112.21875 L 104.8125 69.21875 C 100.64371 73.116859 95.751353 75.975961 90.09375 77.84375 L 90.09375 67.5 C 93.071433 66.525528 96.289216 64.675791 99.78125 61.96875 C 103.27325 59.23474 105.66937 56.064927 106.96875 52.4375 z",
    bbox: {"x":60,"y":37.375,"x2":155,"y2":132.375,"width":95,"height":95}
  },

  bstone_triangle: {
    string: "M 107.5 37.375 C 81.266474 37.375 60 58.641474 60 84.875 C 60 111.10853 81.266474 132.375 107.5 132.375 C 133.73353 132.375 155 111.10853 155 84.875 C 155 58.641474 133.73353 37.375 107.5 37.375 z M 107.8125 45.875 L 143.28125 107.3125 L 72.375 107.3125 L 107.8125 45.875 z M 107.78125 54.53125 L 80.3125 102.15625 L 135.28125 102.15625 L 107.78125 54.53125 z",
    bbox: {"x":60,"y":37.375,"x2":155,"y2":132.375,"width":95,"height":95}
  }
};
