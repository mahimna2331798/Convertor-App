import React from 'react'

const TopLeft = () => {
    return (
        <>
            <div className="text-container">
                <div className="indiv">
                    <h2 className="h2F">Number Systems</h2>
                    <p>Computers use <span className="textcolor1">binary numbers</span> internally, because computers are made naturally to store and
                        process 0s and 1s. The binary number system has two digits, 0 and 1. A number or character
                        is stored as a sequence of 0s and 1s. <span className="textcolor2">Each 0 or 1 is called a <i>bit</i> (binary digit)</span>.</p>
                    <p>In our daily life we use <span className="textcolor1">decimal numbers</span>. When we write a number such as 20 in a program,
                        it is assumed to be a decimal number. Internally, computer software is used to convert
                        decimal numbers into binary numbers, and vice versa.</p>
                    <p>We write computer programs using decimal numbers. However, to deal with an operating
                        system, we need to reach down to the "machine level" by using binary numbers. Binary numbers
                        tend to be very long and cumbersome. Often <span className="textcolor1">hexadecimal numbers</span> are used to abbreviate
                        them, with each hexadecimal digit representing four binary digits. The hexadecimal number
                        system has 16 digits: 0-9 and A-F. <span className="textcolor2">The letters A, B, C, D, E, and F correspond to the decimal
                            numbers 10, 11, 12, 13, 14, and 15</span>.</p>
                    <p>The digits in the decimal number system are 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. A decimal
                        number is represented by a sequence of one or more of these digits. The value that each digit
                        represents depends on its position, which denotes an integral power of 10. For example, the
                        digits 7, 4, 2, and 3 in decimal number 7423 represent 7000, 400, 20, and 3, respectively, as
                        shown below:</p>
                    <p><span className="table">7</span><span className="table">4</span><span className="table">2</span><span className="tabler">3</span>
                        = 7 × 10<sup>3</sup> + 4 × 10<sup>2</sup> + 2 × 10<sup>1</sup> + 3 × 10<sup>0</sup><br /><br />
                        10<sup>3</sup> 10<sup>2</sup> 10<sup>1</sup> 10<sup>0</sup> = 7000 + 400 + 20 + 3 = 7423</p>
                    <p>The decimal number system has ten digits, and the position values are integral powers of 10.
                        We say that 10 is the <i>base</i> or <i>radix</i> of the decimal number system. Similarly, since the binary
                        number system has two digits, its base is 2, and since the hex number system has 16 digits,
                        its base is 16.</p>
                    <p>If <span className="textcolor1">1101</span> is a <span className="textcolor1">binary number</span>, the digits 1, 1, 0, and 1 represent 1 × 2<sup>3</sup>, 1 × 2<sup>2</sup>, 0 × 2<sup>1</sup>, and 1 × 2<sup>0</sup>,respectively: </p>
                    <p><span className="table">1</span><span className="table">1</span><span className="table">0</span><span className="tabler">1</span>
                        = 1 × 2<sup>3</sup> + 1 × 2<sup>2</sup> + 0 × 2<sup>1</sup> + 1 × 2<sup>0</sup><br /><br />
                        2<sup>3</sup>&nbsp;&nbsp; 2<sup>2</sup>&nbsp;&nbsp; 2<sup>1</sup>&nbsp;&nbsp; 2<sup>0</sup>&nbsp;&nbsp; = 8 + 4 + 0 + 1 = 13</p>
                    <p>If <span className="textcolor1">7423</span> is a <span className="textcolor1">hex number</span>, the digits 7, 4, 2, and 3 represent 7 × 16<sup>3</sup>, 4 × 16<sup>2</sup>, 2 × 16<sup>1</sup>, and 3 × 16<sup>0</sup>,respectively: </p>
                    <p><span className="table">7</span><span className="table">4</span><span className="table">2</span><span className="tabler">3</span>
                        = 7 × 16<sup>3</sup> + 4 × 16<sup>2</sup> + 2 × 16<sup>1</sup> + 3 × 16<sup>0</sup><br /><br />
                        16<sup>3</sup> 16<sup>2</sup> 16<sup>1</sup> 16<sup>0</sup> = 7000 + 400 + 20 + 3 = 7423</p>
                </div>
            </div>

        </>
    )
}

export default TopLeft