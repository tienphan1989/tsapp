import React from 'react'
import './NutritionLabel.css'

export const NutritionLabel = () => {

    return (
        <React.Fragment>
            <div className='nutrition'>
            <div className='nutrition label'>
            <h3>Nutrition Facts</h3>
            <span> Serving Size 1bag 7 oz 198g(198g)</span>
            <div className="separator"></div>
            
            <table style={{display:'inline' }}>
            <tr>
          <td colspan="2" className="nutrition-label-td">
            <strong>Amount Per Serving</strong>
          </td>
        </tr>
        <tr>
          <td className="nutrition-label-td">
            <strong>Calories</strong> 972
          </td>
          <td className="align-text-right">Calories from Fat 558</td>
        </tr>
        <tr>
          <td className="nutrition-label-td"></td>
          <td className="align-text-right">% <strong>Daily Value*</strong></td>
        </tr>
        <tr>
          <td><strong>Total Fat</strong> 64g</td>
          <td className="align-text-right">99%</td>         
        </tr>
        <tr>
          <td>Saturated Fat 16g</td>
          <td className="align-text-right">80%</td>
        </tr>
        <tr>
          <td>Trans Fat</td>
          <td></td>
        </tr>
        <tr>
          <td><strong>Cholesterol</strong> 0mg</td>
          <td className="align-text-right">0%</td>          
        </tr>
        <tr>
          <td><strong>Sodium</strong> 1485mg</td>
          <td className="align-text-right">62%</td>
        </tr>
        <tr>
          <td>Dietary Fiber 9g</td>
          <td className="align-text-right">35%</td>
        </tr>
        <tr>
          <td>Sugars</td>
          <td></td>
        </tr>
        <tr>
          <td><strong>Protein</strong> 15g</td>
          <td></td>
        </tr>
      </table>
      <div className="separator"></div>
      <table style={{display:'inline'}}>
        <tr>
          <td>Vitamin A</td>
          <td className="align-text-right">9%</td>
          <td>• Vitamin C</td>
          <td className="align-text-right">112%</td>
        </tr>
        <tr>
          <td>Calcium</td>
          <td className="align-text-right">10%</td>
          <td>• Iron</td>
          <td className="align-text-right">21%</td>
        </tr>
      </table>
      <div className="info">
        *Percent Daily Values are based on a 2,000 Calorie Diet. Your daily values may be higher or lower depending on your calorie needs
      </div>
        </div></div>

        </React.Fragment>
    )
}

export default NutritionLabel
