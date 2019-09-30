let hearts = {
  bathroom: '<path d="M16 56.34c-2.392-10.705-4.34-24.68-2-35.497.984-4.576 4.108-9.8 9.384-9.728 3.768.08 5.412 4.74 6.852 7.552" /><path d="M21.732 26.591c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5 3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5-3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5 3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5-3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm-20 9c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5 3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5-3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5 3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5-3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm-20 10c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5 3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5-3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5 3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408zm5-3c-1.956 1.54-1.464 7.6 1.268 4.408.18-1.56-.588-3.056-1.268-4.408z" stroke-width="1" /><path d="M5 56.34S2.264 69.4 10 75.954c20.348 17.24 59.652 17.24 80 0 7.736-6.552 5-19.616 5-19.616zm25.24-37.673C25.136 18.787 20 25 20 25h22.152s-6.816-6.448-11.912-6.332z" />',
  beach: '<path d="M-3.548 63.686s19.168-9.758 58.408-9.758 58.743 9.075 58.743 9.075M10.929 30.176l51.683 18.81s2.697-20.301-18.724-28.097c-21.42-7.797-32.959 9.287-32.959 9.287z" /><path d="M25.025 35.306s11.63-17.176 18.978-14.377c7.347 2.8 4.514 22.927 4.514 22.927m-11.705-4.26l-5.48 14.26" /><circle r="10" cy="20.148" cx="78.292" /><path d="M78.07 7.917L77.884.148m12.302 20h10m-32.95 0h-10m21.02 10l-.186 10m-7.883-12.609l-7.05 7.61m22.05-23.133l7.418-6.868m-22.418 7.8l-10-7.8m25 23.078l7.427 6.922M-2.097 69.906s9.733-4.797 15-5c6.866-.263 13.128 5 20 5 6.871 0 13.133-5.263 20-5 5.266.203 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-5 15-5M-4.608 82.237s9.734-4.798 15-5c6.867-.264 13.128 5 20 5s13.133-5.264 20-5c5.267.202 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-5 15-5M-7.097 94.906s9.733-4.797 15-5c6.866-.263 13.128 5 20 5 6.871 0 13.133-5.263 20-5 5.266.203 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-5 15-5" />',
  bed: '<path d="M10.212 70.127l81.06-.424c3.312-.017 4.634-14.713.847-14.703l-84.026.212c-4.044.01-2.67 14.94 2.119 14.915zM10 55s5-11 40-11 40 11 40 11" stroke-width="5" /><path d="M18.562 49s.754-7.958 11.483-11.102C40.892 34.72 48.562 44 48.562 44M83 49s-.754-7.958-11.483-11.102C60.669 34.72 53 44 53 44" stroke-width="3" /><path d="M7.94 55s-1.715-24.906 8.109-24.906H84.55c8.651 0 7.882 24.906 7.882 24.906" stroke-width="5" />',
  car: '<path d="M34.997 50v10M40 50v10m4.994-10v10m5.003-10v10M55 50v10m4.998-10v10m4.999-10v10M15 65.005h69.999V45c-19.33-3.027-39.565-4.087-70.004 0z" stroke-width="4" /><circle r="4.998" cy="55.002" cx="74.998" stroke-width="4" /><circle r="4.998" cx="25.423" cy="55.214" stroke-width="4" /><path d="M15 65.004H4.998V75H95v-9.996H84.999M14.999 50s-6.331.242-8.307 2.332C4.892 54.237 4.998 60 4.998 60H15m69.999-10s6.327.242 8.303 2.332C95.106 54.237 95 60 95 60H84.999m-80 0v5.003M95 60v5.003M4.998 75v10.002c0 3.335 10.002 3.335 10.002 0V75m69.999 0v10.002c0 3.335 10.001 3.335 10.001 0V75M15 45.006v-10.01h69.999v10" /><path d="M15 35s0-24.996 4.998-24.996h59.998C85 10.004 85 35 85 35" /><path d="M20.002 35s0-19.998 4.994-19.998h50.006C80 15.002 80 35 80 35m-65 0H9.997s1.179-3.82 0-4.998c-1.175-1.18-3.82-1.18-4.999 0-2.358 2.358 0 10 0 10H15M84.999 35h4.998s-1.179-3.82 0-4.998c1.18-1.18 3.824-1.18 5.003 0 2.354 2.358 0 10 0 10H84.999" stroke-width="4" /><path d="M55 35s2.53-4.998 9.997-4.998c7.47 0 10 4.998 10 4.998" stroke-width="4" />',
  chef: '<path d="M25 90V70s-10.83-2.208-15-10-4.472-26.056 0-35c4.472-8.944 24.723 3.426 35 0 10.277-3.426 19.723-13.426 30-10 10.277 3.426 10.528 1.056 15 10 4.472 8.944 4.17 27.208 0 35-4.17 7.792-15 10-15 10v20z" /><path d="M25 70s13.366.657 20 0c8.457-.837 25-5 25-5" />',
  fishing: '<path d="M16 74c-8.616-.727-12.474-55.232 36-54.436 30 3.156 36 14.964 41.92 30.778C98.14 61.61 76.966 65.472 52 50c-13.632-8.612-36 24-36 24z" /><path d="M73.808 24.8C63.13 18.532 55.16 2.804 41.2 8c4.902 3.18 2.38 5.558-1.2 12M11.739 68S14.987 79.758 16 86c.64 3.948 0 12 0 12s2.196-9.648 6-12c3.403-2.102 12 0 12 0s-9.648-2.196-12-6c-2.102-3.403-2.4-10.8-2.4-10.8" /><circle r="3" cy="41" cx="79" /><path d="M65 30c-2.252 4.156-10.271 16.52 2.246 20" />',
  location: '<path d="M47.368 95S21.1 69.137 14.365 45.414C12.299 38.139 12.07 31.065 15 25 27.482-.842 67.983-.842 80 25c12.017 25.842-32.632 70-32.632 70z" /><path d="M47.712 62.526s-14.948-18-9.955-28.337 15.394-10.337 20.2 0c4.807 10.337-10.245 28.337-10.245 28.337z" stroke-width="12" />',
  people: '<path d="M35 92.304c-.028-12.6 21.948-10.2 21.972-17.6-.264-4.34-7-5-7.256-20.16.256-19.84 30.256-19.84 30.972.224-.716 14.936-7.6 15.316-7.716 19.936-.024 7.4 22 5 22.028 17.6" /><path d="M20 77.304c-.028-12.6 21.948-10.2 21.972-17.6-.264-4.34-7-5-7.256-20.16.256-19.84 30.256-19.84 30.972.224" /><path d="M5 62.304c-.028-12.6 21.948-10.2 21.972-17.6-.264-4.34-7-5-7.256-20.16.256-19.84 30.256-19.84 30.972.224" />',
  pool: '<path d="M37.416 48.8s-2.262-6.65-7.566-6.65c-12.088 0-10.15 16.402-10.15 24.672M60.303 48.8s-2.262-6.65-7.565-6.65c-12.09 0-10.151 16.402-10.151 24.672" stroke-width="4.108" /><path d="M-10 50h120" stroke-width="5.477" /><path d="M20 60h23.295M-5 70s9.733-4.798 15-5c6.867-.264 13.128 5 20 5s13.133-5.264 20-5c5.267.202 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-5 15-5M-7.51 82.33s9.733-4.797 15-5c6.866-.263 13.128 5 20 5 6.871 0 13.133-5.263 20-5 5.266.203 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-5 15-5M-10 95s9.733-4.798 15-5c6.867-.264 13.128 5 20 5s13.133-5.264 20-5c5.267.202 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-5 15-5" /><circle cx="80.036" cy="20" r="10" /><path d="M79.814 7.769L79.628 0M91.93 20h10m-32.95 0h-10M80 30l-.186 10M71.93 27.391L64.88 35m22.05-23.132L94.348 5M71.93 12.8l-10-7.8m25 23.078L94.357 35" />',
  sun: '<circle cx="50.011" cy="50.088" r="27.499" /><path d="M50 24.999v-25M50 75v25M25 50H0m75 0h25M70 30L95 4.999m-65 25L5 5m25 65L5 95m65-25l25 25" />',
  surfboard: '<path d="M50 7.161C30 30 30 60 43 95h14c13-35 13-65-7-87.839z" stroke-width="5" /><path d="M50 10v70" stroke-width="3" />',
  water: '<path d="M-8.71 51.71s9.734-4.798 15-5c6.867-.264 13.128 5 20 5s13.133-5.264 20-5c5.267.202 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-3.202 15-3.202" /><path d="M-10.704 67.714s9.733-4.798 15-5c6.866-.264 13.127 5 20 5 6.871 0 13.132-5.264 20-5 5.266.202 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-5 15-5" /><path d="M-5.247 33.237s10.033-2.701 15.3-2.903c6.866-.264 13.127 5 20 5 6.871 0 13.132-5.264 20-5 5.266.202 9.73 5 15 5s9.73-5 15-5 9.73 5 15 5 15-5 15-5" />',
  yoga: '<path d="M63.314 55.127c9.068-15.169 5.634-25.554-6.398-28.009-.451-.564 3.613-4.742 3.103-8.997-1.55-12.943-18.12-14.293-20.816.015-.773 4.103 4.425 9.293 3.712 9.42-12.793.699-16.073 16.74-6.882 28.194C6.824 62.274 21.95 85.324 52.078 79.786c36.462 5.115 37.866-23.014 11.236-24.659z" /><path d="M31.934 37.412l-10.755.3L5.965 94.915c37.042.511 58.1.528 90.1.424L79.43 37.712H68.914" />',
  
}
module.exports = hearts
