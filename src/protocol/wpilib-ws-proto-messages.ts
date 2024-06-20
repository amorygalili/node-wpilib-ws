// AUTOGENERATED FILE. DO NOT MODIFY.
// Generated via `npm run gen-protocol`

// Generated on: Thu Jun 20 2024 16:05:05 GMT-0400 (Eastern Daylight Time)

// A 3-axis accelerometer
export const AccelDeviceType: string = "Accel";
export interface AccelPayload {
    // If the accelerometer is initialized in robot code
    "<init"?: boolean;
    // Desired range in Gs
    "<range"?: number;
    // X-axis acceleration in Gs
    ">x"?: number;
    // Y-axis acceleration in Gs
    ">y"?: number;
    // Z-axis acceleration in Gs
    ">z"?: number;
}

// Addressable LED Strip
export const AddressableLEDDeviceType: string = "AddressableLED";
export interface AddressableLEDPayload {
    // If the led strip is initialized in the robot program
    "<init"?: boolean;
    // DIO pin number
    "<output_port"?: number;
    // The number of leds in the strip
    "<length"?: number;
    // Whether the strip is outputting data
    "<running"?: boolean;
    // One value per led; value is an object with "r", "g", and "b" keys, representing the rgb (0-255) components of the color
    "<data"?: object[];
}

// Analog Input
export const AIDeviceType: string = "AI";
export interface AIPayload {
    // If the analog input is initialized in robot code
    "<init"?: boolean;
    // Input voltage
    ">voltage"?: number;
}

// Digital IO
export const DIODeviceType: string = "DIO";
export interface DIOPayload {
    // If the DIO is initialized in robot code
    "<init"?: boolean;
    // True if input, false if output
    "<input"?: boolean;
    // Input or output state
    "<>value"?: boolean;
}

// Duty Cycle Output
export const dPWMDeviceType: string = "dPWM";
export interface dPWMPayload {
    // If dPWM output is initialized in robot code
    "<init"?: boolean;
    // Duty cycle % (0.0 to 1.0)
    "<duty_cycle"?: number;
    // DIO Pin number
    "<dio_pin"?: number;
}

// Driver Station
export const DriverStationDeviceType: string = "DriverStation";
export interface DriverStationPayload {
    // One shot. If set to true in a message, notifies robot code that new DS and joystick data is available
    ">new_data"?: boolean;
    // True to enable the robot program
    ">enabled"?: boolean;
    // True for autonomous mode; false for teleop
    ">autonomous"?: boolean;
    // True for test mode; false for other modes
    ">test"?: boolean;
    // True to emergency stop (no motor outputs)
    ">estop"?: boolean;
    // True if the DS is connected to a Field Management System (FMS)
    ">fms"?: boolean;
    // True if a DS application is connected
    ">ds"?: boolean;
    // Station color and number; supported values are 'red1', 'red2, 'red3', 'blue1', 'blue2', 'blue3'
    ">station"?: string;
    // Match time countdown, in seconds, for each match period (e.g. for 15 second period, starts at 15 and counts down to 0). If not in a match, -1
    ">match_time"?: number;
    // Game-specific data; arbitrary string contents
    ">game_data"?: number;
}

// Duty Cycle inputs. Commonly used for absolute encoders. The position is accumulated over multiple rotations.
export const DutyCycleDeviceType: string = "DutyCycle";
export interface DutyCyclePayload {
    // True if the encoder is connected
    ">connected"?: boolean;
    // The position in rotations
    ">position"?: number;
}

// Relative encoder
export const EncoderDeviceType: string = "Encoder";
export interface EncoderPayload {
    // If encoder is initialized in robot code
    "<init"?: boolean;
    // Digital channel for 'A' phase
    "<channel_a"?: number;
    // Digital channel for 'B' phase
    "<channel_b"?: number;
    // Number of samples to average for period measurement
    "<samples_to_avg"?: number;
    // Accumulated count (pulses)
    ">count"?: number;
    // Period between pulses in seconds
    ">period"?: number;
}

// A single axis or 3-axis gyro. Single axis gyros only use the X angle parameter
export const GyroDeviceType: string = "Gyro";
export interface GyroPayload {
    // If gyro is initialized in robot code
    "<init"?: boolean;
    // Gyro range in degrees/second (optional)
    "<range"?: number;
    // True if the gyro is connected
    ">connected"?: boolean;
    // X-axis angle in degrees
    ">angle_x"?: number;
    // Y-axis angle in degrees
    ">angle_y"?: number;
    // Z-axis angle in degrees
    ">angle_z"?: number;
    // X-axis angular rate of change in degrees/second
    ">rate_x"?: number;
    // Y-axis angular rate of change in degrees/second
    ">rate_y"?: number;
    // Z-axis angular rate of change in degrees/second
    ">rate_z"?: number;
}

// Joystick data is an input to the robot program and should be updated for each input joystick on a periodic basis.
export const JoystickDeviceType: string = "Joystick";
export interface JoystickPayload {
    // One array element per axis; value is -1 to 1 range
    ">axes"?: number[];
    // One array element per POV; value is angle in degrees of the POV (e.g. 0, 90, 315) if pressed, or -1 if the POV is not pressed.
    ">povs"?: number[];
    // One array element per button; true if button is pressed, false if button is released
    ">buttons"?: boolean[];
    // Left rumble, value is 0-1 range
    "<rumble_left"?: number;
    // Right rumble, value is 0-1 range
    "<rumble_right"?: number;
}

// PWMs may be used to control either speed controlelrs of servos. Typically only one of either 'speed' (for a speed controller) or 'position' (for a servo) is used for a given PWM
export const PWMDeviceType: string = "PWM";
export interface PWMPayload {
    // If PWM is initialized in robot code
    "<init"?: boolean;
    // Speed, -1.0 to 1.0 range
    "<speed"?: number;
    // Servo position, 0.0 to 1.0 range
    "<position"?: number;
}

// Relay
export const RelayDeviceType: string = "Relay";
export interface RelayPayload {
    // If relay forward direction is initialized in robot code
    "<init_fwd"?: boolean;
    // If relay reverse direction is initialized in robot code
    "<init_rev"?: boolean;
    // True if forward direction is enabled
    "<fwd"?: boolean;
    // True if reverse direction is enabled
    "<rev"?: boolean;
}

// RoboRIO message
export const RoboRIODeviceType: string = "RoboRIO";
export interface RoboRIOPayload {
    // FPGA button state
    ">fpga_button"?: boolean;
    // Vin rail voltage
    ">vin_voltage"?: number;
    // Vin rail current
    ">vin_current"?: number;
    // 6V rail voltage
    ">6v_voltage"?: number;
    // 6V rail current
    ">6v_current"?: number;
    // True if 6V rail active, false if inactive
    ">6v_active"?: boolean;
    // Number of faults on 6V rail
    ">6v_faults"?: number;
    // 5V rail voltage
    ">5v_voltage"?: number;
    // 5V rail current
    ">5v_current"?: number;
    // True if 5V rail active, false if inactive
    ">5v_active"?: boolean;
    // Number of faults on 5V rail
    ">5v_faults"?: number;
    // 3.3V rail voltage
    ">3v3_voltage"?: number;
    // 3.3V rail current
    ">3v3_current"?: number;
    // True if 3,3V rail active, false if inactive
    ">3v3_active"?: boolean;
    // Number of faults on 3.3V rail
    ">3v3_faults"?: number;
}

// SimDevice
export const SimDeviceType: string = "SimDevice";
export interface SimDevicePayload {
    [key: string]: any;
}

// This should be an OR of all the payload types
type WpilibWsMsgPayload = AccelPayload | AddressableLEDPayload | AIPayload | DIOPayload | dPWMPayload | DriverStationPayload | DutyCyclePayload | EncoderPayload | GyroPayload | JoystickPayload | PWMPayload | RelayPayload | RoboRIOPayload | SimDevicePayload;

// This is the envelope type
export interface IWpilibWsMsg {
    type: string;
    device: string;
    data: WpilibWsMsgPayload;
}

export function isValidWpilibWsMsg(msg: any): boolean {
    if (typeof msg !== "object") {
        return false;
    }

    if (msg.type === undefined || typeof msg.type !== "string") {
        return false;
    }

    if (msg.type === undefined || typeof msg.device !== "string") {
        return false;
    }

    if (msg.data === undefined) {
        return false;
    }

    return true;
}
