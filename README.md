# VoltView - Smart Home Energy Monitoring Dashboard

VoltView is a modern web application built with React that helps users monitor and manage their home energy consumption through an intuitive dashboard interface.

## Features

- **Real-time Energy Monitoring**
  - Track current power usage
  - View device-specific consumption
  - Monitor active/inactive devices

- **Smart Device Management**
  - Control individual devices
  - Group controls with Quick Actions
  - Device status monitoring
  - Energy consumption statistics

- **Weather Integration**
  - Real-time weather updates
  - Temperature monitoring
  - Weather-based energy recommendations
  - Location-specific forecasts

- **Energy Reports**
  - Detailed consumption analytics
  - Device usage breakdown
  - Cost estimates
  - Energy-saving recommendations

- **Dark/Light Mode**
  - Customizable UI theme
  - Automatic system preference detection

## Tech Stack

- React 
- React Router DOM
- TailwindCSS
- Lucide React Icons
- Axios
- Vite

## Note 
- The UI is designed using **Claude LLM**.
- **All the Data is fake** except the weather data.

## TakeAways from the project
- Use of context API
- Conditional rendering
- Use axios for API calls
- Manuplation of data. (took help from AI to get better results in some areas).



## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/voltview.git
```

2. Install dependencies:
```bash
cd voltview
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
VoltView/
├── src/
│   ├── Components/
│   │   ├── DashBoardComponents/
│   │   ├── DevicePageComponents/
│   │   ├── WeatherPageComponents/
│   │   └── ReportPageComponents/
│   ├── Context/
│   │   ├── DarkmodeContext.jsx
│   │   ├── Data.jsx
│   │   └── WeatherPageContext.jsx
│   ├── Pages/
│   │   ├── DashBoard.jsx
│   │   ├── DevicesPage.jsx
│   │   ├── WeatherPage.jsx
│   │   └── ReportPage.jsx
│   └── App.jsx
```

## Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Icons by [Lucide](https://lucide.dev/)
- UI components styled with [TailwindCSS](https://tailwindcss.com/)
- UI components styled using **Claude**



