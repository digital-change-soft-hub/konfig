/*
 * splitit-web-api-v3
 *
 * Splitit's Web API
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = CsharpSplitit.Net.Client.OpenAPIDateConverter;

namespace CsharpSplitit.Net.Model
{
    /// <summary>
    /// PaymentPlanOptionModel
    /// </summary>
    [DataContract(Name = "PaymentPlanOptionModel")]
    public partial class PaymentPlanOptionModel : IEquatable<PaymentPlanOptionModel>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentPlanOptionModel" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PaymentPlanOptionModel() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentPlanOptionModel" /> class.
        /// </summary>
        /// <param name="numberOfInstallments">numberOfInstallments (required).</param>
        /// <param name="firstInstallmentAmount">firstInstallmentAmount (required).</param>
        /// <param name="installmentAmount">installmentAmount (required).</param>
        /// <param name="lastInstallmentAmount">lastInstallmentAmount (required).</param>
        /// <param name="links">links.</param>
        /// <param name="termsAndConditionsBrief">termsAndConditionsBrief.</param>
        /// <param name="installmentFrequency">installmentFrequency.</param>
        public PaymentPlanOptionModel(int numberOfInstallments = default(int), double firstInstallmentAmount = default(double), double installmentAmount = default(double), double lastInstallmentAmount = default(double), LinksModel links = default(LinksModel), string termsAndConditionsBrief = default(string), string installmentFrequency = default(string))
        {
            this.NumberOfInstallments = numberOfInstallments;
            this.FirstInstallmentAmount = firstInstallmentAmount;
            this.InstallmentAmount = installmentAmount;
            this.LastInstallmentAmount = lastInstallmentAmount;
            this.Links = links;
            this.TermsAndConditionsBrief = termsAndConditionsBrief;
            this.InstallmentFrequency = installmentFrequency;
        }

        /// <summary>
        /// Gets or Sets NumberOfInstallments
        /// </summary>
        [DataMember(Name = "NumberOfInstallments", IsRequired = true, EmitDefaultValue = true)]
        public int NumberOfInstallments { get; set; }

        /// <summary>
        /// Gets or Sets FirstInstallmentAmount
        /// </summary>
        [DataMember(Name = "FirstInstallmentAmount", IsRequired = true, EmitDefaultValue = true)]
        public double FirstInstallmentAmount { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentAmount
        /// </summary>
        [DataMember(Name = "InstallmentAmount", IsRequired = true, EmitDefaultValue = true)]
        public double InstallmentAmount { get; set; }

        /// <summary>
        /// Gets or Sets LastInstallmentAmount
        /// </summary>
        [DataMember(Name = "LastInstallmentAmount", IsRequired = true, EmitDefaultValue = true)]
        public double LastInstallmentAmount { get; set; }

        /// <summary>
        /// Gets or Sets Links
        /// </summary>
        [DataMember(Name = "Links", EmitDefaultValue = false)]
        public LinksModel Links { get; set; }

        /// <summary>
        /// Gets or Sets TermsAndConditionsBrief
        /// </summary>
        [DataMember(Name = "TermsAndConditionsBrief", EmitDefaultValue = false)]
        public string TermsAndConditionsBrief { get; set; }

        /// <summary>
        /// Gets or Sets InstallmentFrequency
        /// </summary>
        [DataMember(Name = "InstallmentFrequency", EmitDefaultValue = false)]
        public string InstallmentFrequency { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PaymentPlanOptionModel {\n");
            sb.Append("  NumberOfInstallments: ").Append(NumberOfInstallments).Append("\n");
            sb.Append("  FirstInstallmentAmount: ").Append(FirstInstallmentAmount).Append("\n");
            sb.Append("  InstallmentAmount: ").Append(InstallmentAmount).Append("\n");
            sb.Append("  LastInstallmentAmount: ").Append(LastInstallmentAmount).Append("\n");
            sb.Append("  Links: ").Append(Links).Append("\n");
            sb.Append("  TermsAndConditionsBrief: ").Append(TermsAndConditionsBrief).Append("\n");
            sb.Append("  InstallmentFrequency: ").Append(InstallmentFrequency).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as PaymentPlanOptionModel);
        }

        /// <summary>
        /// Returns true if PaymentPlanOptionModel instances are equal
        /// </summary>
        /// <param name="input">Instance of PaymentPlanOptionModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PaymentPlanOptionModel input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.NumberOfInstallments == input.NumberOfInstallments ||
                    this.NumberOfInstallments.Equals(input.NumberOfInstallments)
                ) && 
                (
                    this.FirstInstallmentAmount == input.FirstInstallmentAmount ||
                    this.FirstInstallmentAmount.Equals(input.FirstInstallmentAmount)
                ) && 
                (
                    this.InstallmentAmount == input.InstallmentAmount ||
                    this.InstallmentAmount.Equals(input.InstallmentAmount)
                ) && 
                (
                    this.LastInstallmentAmount == input.LastInstallmentAmount ||
                    this.LastInstallmentAmount.Equals(input.LastInstallmentAmount)
                ) && 
                (
                    this.Links == input.Links ||
                    (this.Links != null &&
                    this.Links.Equals(input.Links))
                ) && 
                (
                    this.TermsAndConditionsBrief == input.TermsAndConditionsBrief ||
                    (this.TermsAndConditionsBrief != null &&
                    this.TermsAndConditionsBrief.Equals(input.TermsAndConditionsBrief))
                ) && 
                (
                    this.InstallmentFrequency == input.InstallmentFrequency ||
                    (this.InstallmentFrequency != null &&
                    this.InstallmentFrequency.Equals(input.InstallmentFrequency))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                hashCode = (hashCode * 59) + this.NumberOfInstallments.GetHashCode();
                hashCode = (hashCode * 59) + this.FirstInstallmentAmount.GetHashCode();
                hashCode = (hashCode * 59) + this.InstallmentAmount.GetHashCode();
                hashCode = (hashCode * 59) + this.LastInstallmentAmount.GetHashCode();
                if (this.Links != null)
                {
                    hashCode = (hashCode * 59) + this.Links.GetHashCode();
                }
                if (this.TermsAndConditionsBrief != null)
                {
                    hashCode = (hashCode * 59) + this.TermsAndConditionsBrief.GetHashCode();
                }
                if (this.InstallmentFrequency != null)
                {
                    hashCode = (hashCode * 59) + this.InstallmentFrequency.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}