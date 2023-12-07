import React, { useCallback } from 'react'

const DropDown = ({
    label,
    items,
    value,
    onValueChange,
    labelExtractor,
    valueExtractor
}) => {
    const handleValueOnChange = useCallback(event => {
        const { target: { value: selectedValue } } = event;
        const item = items?.find((i) => {
            const convI = valueExtractor(i).toString();
            return convI === selectedValue
        });
        if (!item) return; // item cannot be undefined.
        onValueChange(selectedValue, item);
    },
        [items]);
    return (
        <>
            <label htmlFor="select1">{label}</label><br />

            <select
                className="textcolor2 bgcolor1"
                id="select1" name="unit1"
                value={value}
                onChange={handleValueOnChange}
            >
                {items && items?.map((item, index) => {
                    const itemlabel = labelExtractor(item);
                    const itemValue = valueExtractor(item);

                    return (
                        <option key={index} value={itemValue}>
                            {itemlabel}
                        </option>
                    )
                })}
            </select>
        </>
    )
}

export { DropDown }