import { ResponsiveLine } from '@nivo/line'

const LineChart = ({ data }) => (
    <ResponsiveLine
        data={data}
        colors={{ scheme: 'paired' }}
        enableSlices="x"
        borderColor={{ from: 'color' }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            useUTC: false,
            precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"

        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            format: '%b %d',
            tickValues: 'every 14 days',
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Week',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Batting average',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                toggleSerie: true,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default LineChart;