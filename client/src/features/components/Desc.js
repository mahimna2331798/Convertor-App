import React from 'react'

const Desc = () => {
    return (
            <div className="text-bottom">
                <h2 className="h2F">Conversions Between Binary and Decimal Numbers</h2>
                <p>Given a binary number <span className="textcolor1">b<sub>n</sub>b<sub>n - 1</sub>b<sub>n - 2</sub>...b<sub>2</sub>b<sub>1</sub>b<sub>0</sub></span>, the equivalent decimal value is
                    <span className="textcolor1">b<sub>n</sub> × 2<sup>n</sup> + b<sub>n-1</sub> × 2<sup>n-1</sup> + b<sub>n-2</sub> × 2<sup>n-2</sup> + ... +
                        b<sub>2</sub> × 2<sup>2</sup> + b<sub>1</sub> × 2<sup>1</sup> + b<sub>0</sub> × 2<sup>0</sup></span>.</p>
                <p>Here are some examples of converting binary numbers to decimals:</p>
                <ol>
                    <li><i>Binary:</i> 10<br /><i>Conversion Formula:</i> 1 × 2<sup>1</sup> + 0 × 2<sup>0</sup>
                        <br /><i>Decimal:</i> 2</li>
                    <li><i>Binary:</i> 1000<br /><i>Conversion Formula:</i> 1 × 2<sup>3</sup> + 0 × 2<sup>2</sup> + 0 × 2<sup>1</sup> + 0 × 2<sup>0</sup>
                        <br /><i>Decimal:</i> 8</li>
                    <li><i>Binary:</i> 10101011<br /><i>Conversion Formula:</i> 1 × 2<sup>7</sup> + 0 × 2<sup>6</sup> + 1 × 2<sup>5</sup> + 0 × 2<sup>4</sup> +
                        1 × 2<sup>3</sup> + 0 × 2<sup>2</sup> + 1 × 2<sup>1</sup> + 1 × 2<sup>0</sup>
                        <br /><i>Decimal:</i> 171</li>
                </ol>
                <p>To convert a decimal number d to a binary number is to find the bits b<sub>n</sub>b<sub>n - 1</sub>b<sub>n - 2</sub>...b<sub>2</sub>b<sub>1</sub>b<sub>0</sub> such that</p>
                <p>d = b<sub>n</sub> × 2<sup>n</sup> + b<sub>n-1</sub> × 2<sup>n-1</sup> + b<sub>n-2</sub> × 2<sup>n-2</sup> + ... +
                    b<sub>2</sub> × 2<sup>2</sup> + b<sub>1</sub> × 2<sup>1</sup> + b<sub>0</sub> × 2<sup>0</sup></p>
                <p>These bits can be found by successively dividing d by 2 until the quotient is 0. The remainders
                    are b<sub>0</sub>b<sub>1</sub>b<sub>2</sub>...b<sub>n - 2</sub>b<sub>n - 1</sub>b<sub>n</sub>.</p>
                <p>For example, the decimal number 123 is 1111011 in binary. The conversion is done as follows:</p>
                <table style={{ marginLeft: '10%' }}>
                    <tbody><tr>
                        <td className="td-border-bottom">2</td>
                        <td className="td-border-bottom td-border-left">123</td>
                        <td />
                    </tr>
                        <tr>
                            <td className="td-border-bottom">2</td>
                            <td className="td-border-bottom td-border-left">61</td>
                            <td className="textcolor2">1</td>
                        </tr>
                        <tr>
                            <td className="td-border-bottom">2</td>
                            <td className="td-border-bottom td-border-left">30</td>
                            <td className="textcolor2">1</td>
                        </tr>
                        <tr>
                            <td className="td-border-bottom">2</td>
                            <td className="td-border-bottom td-border-left">15</td>
                            <td className="textcolor2">0</td>
                        </tr>
                        <tr>
                            <td className="td-border-bottom">2</td>
                            <td className="td-border-bottom td-border-left">7</td>
                            <td className="textcolor2">1</td>
                        </tr>
                        <tr>
                            <td className="td-border-bottom">2</td>
                            <td className="td-border-bottom td-border-left">3</td>
                            <td className="textcolor2">1</td>
                        </tr>
                        <tr>
                            <td />
                            <td className="td-border-left textcolor2">1</td>
                            <td className="textcolor2">1</td>
                        </tr>
                    </tbody></table>
                <p>Than count Binary number bottom to Up. 1111011</p>
                <h2 className="h2F">Conversions Between Hexadecimal and Decimal Numbers</h2>
                <p>Given a hexadecimal number <span className="textcolor1">h<sub>n</sub>h<sub>n - 1</sub>h<sub>n - 2</sub>...h<sub>2</sub>h<sub>1</sub>h<sub>0</sub></span>, the equivalent decimal value is
                    <span className="textcolor1">h<sub>n</sub> × 16<sup>n</sup> + h<sub>n-1</sub> × 16<sup>n-1</sup> + h<sub>n-2</sub> × 16<sup>n-2</sup> + ... +
                        h<sub>2</sub> × 16<sup>2</sup> + h<sub>1</sub> × 16<sup>1</sup> + h<sub>0</sub> × 16<sup>0</sup></span>.</p>
                <p>Here are some examples of converting hexadecimal numbers to decimals:</p>
                <ol>
                    <li><i>Hexadecimal:</i> 7F<br /><i>Conversion Formula:</i> 7 × 16<sup>1</sup> + 15 × 16<sup>0</sup>
                        <br /><i>Decimal:</i> 127</li>
                    <li><i>Hexadecimal:</i> FFFF<br /><i>Conversion Formula:</i> 15 × 16<sup>3</sup> + 15 × 16<sup>2</sup> + 15 × 16<sup>1</sup> + 15 × 16<sup>0</sup>
                        <br /><i>Decimal:</i> 65535</li>
                    <li><i>Hexadecimal:</i> 431<br /><i>Conversion Formula:</i> 4 × 16<sup>2</sup> + 3 × 16<sup>1</sup> + 1 × 16<sup>0</sup>
                        <br /><i>Decimal:</i> 1073</li>
                </ol>
                <p>To convert a decimal number d to a hexadecimal number is to find the bits h<sub>n</sub>h<sub>n - 1</sub>h<sub>n - 2</sub>...h<sub>2</sub>h<sub>1</sub>h<sub>0</sub> such that</p>
                <p>d = h<sub>n</sub> × 16<sup>n</sup> + h<sub>n-1</sub> × 16<sup>n-1</sup> + h<sub>n-2</sub> × 16<sup>n-2</sup> + ... +
                    h<sub>2</sub> × 16<sup>2</sup> + h<sub>1</sub> × 16<sup>1</sup> + h<sub>0</sub> × 16<sup>0</sup></p>
                <p>These bits can be found by successively dividing d by 16 until the quotient is 0. The remainders
                    are h<sub>0</sub>h<sub>1</sub>h<sub>2</sub>...h<sub>n - 2</sub>h<sub>n - 1</sub>h<sub>n</sub>.</p>
                <p>For example, the decimal number 123 is 7B in hexadecimal. The conversion is done as
                    follows:</p>

                <table style={{ marginLeft: '10%' }}>
                    <tbody><tr>
                        <td className="td-border-bottom">16</td>
                        <td className="td-border-bottom td-border-left">123</td>
                        <td />
                    </tr>
                        <tr>
                            <td className="td-border-bottom">16</td>
                            <td className="td-border-bottom td-border-left">7</td>
                            <td className="textcolor2">11</td>
                        </tr>
                        <tr>
                            <td />
                            <td className="td-border-left">0</td>
                            <td className="textcolor2">7</td>
                        </tr>
                    </tbody>
                </table>

                <p>Than count Hexadecimal number bottom to Up. 7B</p>
                <h2 className="h2F">Conversions Between Binary and Hexadecimal Numbers</h2>
                <p>To convert a hexadecimal to a binary number, simply convert each digit in the hexadecimal
                    number into a four-digit binary number, using Table</p>

                <table style={{ marginLeft: '10%' }}>
                    <tbody><tr>
                        <th className="textcolor1">Hexadecimal</th>
                        <th className="textcolor1">Binary</th>
                        <th className="textcolor1">Decimal</th>
                    </tr>
                        <tr>
                            <td>0</td>
                            <td>0000</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>0001</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>0010</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>0011</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>0100</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>0101</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>0110</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>0111</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>1000</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>1001</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td>1010</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td>1011</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td>1100</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td>1101</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>E</td>
                            <td>1110</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>F</td>
                            <td>1111</td>
                            <td>15</td>
                        </tr>
                    </tbody>
                </table>

                <p>For example, the hexadecimal number 7B is 1111011, where 7 is 111 in binary, and B is
                    1011 in binary.</p>
                <p>To convert a binary number to a hexadecimal, convert every four binary digits from right
                    to left in the binary number into a hexadecimal number.</p>
                <p>For example, the binary number 1110001101 is 38D, since 1101 is D, 1000 is 8, and 11 is 3.</p>
            </div>
    )
}

export default Desc